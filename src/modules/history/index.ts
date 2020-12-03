import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {historyApi} from '../../api';
import {AppThunk, RootState} from '../../config/store';
import {stopLoading, startLoading} from '../loading';
import {IHistoryRecord, IHistoryState} from './types';

const initialState: IHistoryState = {
  ids: [],
  byId: {},
  errors: '',
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    getHistory: (state: IHistoryState) => {
      state.errors = initialState.errors;
    },
    getHistorySuccess: (state: IHistoryState, action: PayloadAction<IHistoryRecord[]>) => {
      state.errors = initialState.errors;

      const processedDeals =  action.payload.map(deal => {
        const id = [deal.asset, deal.startDate, deal.finishDate].join('-');

        return {
          ...deal,
          id,
        };
      });
      state.ids = processedDeals.map(deal => deal.id);
      state.byId = processedDeals
        .reduce((dealsById, deal) => ({...dealsById, [deal.id as string]: deal}), {});
    },
    getHistoryFailure: (state: IHistoryState, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },
  },
});

export const {
  getHistory,
  getHistorySuccess,
  getHistoryFailure,
} = historySlice.actions;

export const fetchHistory = (): AppThunk => async dispatch => {
  dispatch(startLoading());
  dispatch(getHistory());
  const {deals: historyRecords, error} = await historyApi.getHistory();

  if (error) {
    dispatch(getHistoryFailure(error));
    dispatch(stopLoading());
    return;
  }

  dispatch(getHistorySuccess(historyRecords as IHistoryRecord[]));
  dispatch(stopLoading());
};

export const historySelector = createSelector(
  (state: RootState) => state.history.ids,
  (state: RootState) => state.history.byId,
  (ids, byId: {[key: string]: IHistoryRecord}) => {
    const sortedDeals = ids.map(id => byId[id]).sort((prevDeal, nextDeal) => {
      const prevDealDate = new Date(prevDeal.finishDate as string);
      const nextDealDate = new Date(nextDeal.finishDate as string);

      return nextDealDate.getTime() - prevDealDate.getTime();
    });

    let page = 1;

    const pagesObject = sortedDeals.reduce<{
      [key: string]: {
        deals?: IHistoryRecord[],
        lossDealsCounter?: number,
        richProfitDealsCounter?: number,
        assetDuplicatesCounter?: { [key: string]: number },
      },
    }>((resultContainer, deal) => {
      let prevPageData = resultContainer[page] || {
        lossDealsCounter: 0,
        richProfitDealsCounter: 0,
        assetDuplicatesCounter: {},
        deals: [],
      };
      // reset counters for each ten
      const dealsLength = (prevPageData?.deals ?? []).length;
      if (`${dealsLength}`.includes('0') && dealsLength) {
        page += 1;
        resultContainer = {
          ...resultContainer,
          [page]: {
            lossDealsCounter: 0,
            richProfitDealsCounter: 0,
            assetDuplicatesCounter: {},
            deals: [],
          }
        };

        prevPageData = resultContainer[page];
      }

      const profit = parseFloat(`${deal.profit}`);
      const isNegativeProfit = profit < 0;
      const isRichProfit = profit > 100;

      // prevents adding excessive loss deals
      if (prevPageData.lossDealsCounter === 2 && isNegativeProfit) return resultContainer;
      // prevents insufficient rich deals number
      if (
        `${dealsLength}`.includes('9') &&
        (prevPageData?.richProfitDealsCounter ?? 0) <= 2 &&
        !isRichProfit
      ) return resultContainer;
      // prevents adding more than two assets duplicates
      if ((prevPageData?.assetDuplicatesCounter?.[deal.asset] ?? 0) > 1) return resultContainer;

      const processedPageData = {
        ...prevPageData,
        lossDealsCounter: isNegativeProfit
          ? (prevPageData?.lossDealsCounter ?? 0) + 1
          : (prevPageData?.lossDealsCounter ?? 0),
        richProfitDealsCounter: isRichProfit
          ? (prevPageData?.richProfitDealsCounter ?? 0) + 1
          : (prevPageData?.richProfitDealsCounter ?? 0),
        assetDuplicatesCounter: {
          ...prevPageData?.assetDuplicatesCounter,
          [deal.asset] : (prevPageData?.assetDuplicatesCounter?.[deal.asset] ?? 0) + 1,
        }
      };
      processedPageData.deals?.push(deal);

      return {
        ...resultContainer,
        [page]: processedPageData
      };
    }, {
      1: {
        lossDealsCounter: 0,
        richProfitDealsCounter: 0,
        assetDuplicatesCounter: {},
        deals: [],
      },
    });

    const pagesMap = new Map(Object.entries(pagesObject).map(([key, value]) => [parseInt(key, 10), value.deals]));

    return {
      pagesMap: pagesMap,
      totalPages: pagesMap.size
    };
  },
);

export default historySlice.reducer;
