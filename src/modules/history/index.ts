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

      const processedDeals = action.payload.map(deal => {
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

const initialHistoryPageData = {
  lossDealsCounter: 0,
  richProfitDealsCounter: 0,
  assetDuplicatesCounter: {},
  deals: [],
};

// history settings
const pageSize = 10;
const maxLossDeals = 2;
const minRichDealsOnPage = 1;
const minRichProfit = 100;
const maxAssetDuplicates = 2;

export const historySelector = createSelector(
  (state: RootState) => state.history.ids,
  (state: RootState) => state.history.byId,
  (ids, byId: { [key: string]: IHistoryRecord }) => {
    const sortedByDateDeals = ids.map(id => byId[id]).sort((prevDeal, nextDeal) => {
      const prevDealDate = new Date(prevDeal.finishDate as string);
      const nextDealDate = new Date(nextDeal.finishDate as string);

      return nextDealDate.getTime() - prevDealDate.getTime();
    });

    let page = 1;

    const pagesContainer = sortedByDateDeals.reduce<{
      [key: string]: {
        deals?: IHistoryRecord[],
        lossDealsCounter?: number,
        richProfitDealsCounter?: number,
        assetDuplicatesCounter?: { [key: string]: number },
      },
    }>((resultContainer, deal, index) => {
      let dealsLength = (resultContainer?.[page]?.deals || []).length;

      // creates a new page after reaching ten items on a page
      if (dealsLength === pageSize) page += 1;

      const currentPage = resultContainer[page] || initialHistoryPageData;

      dealsLength = (currentPage?.deals ?? []).length;

      let isSkippedDeal = false;
      const profit = parseFloat(`${deal.profit}`);
      const isNegativeProfit = profit < 0;
      const isRichProfit = profit >= minRichProfit;
      const isEnoughNumberOfRichDeals = currentPage?.richProfitDealsCounter as number >= minRichDealsOnPage;
      const isAlmostCompletedPage = dealsLength === pageSize - 1;

      const maxLossDealsIsReached = currentPage.lossDealsCounter === maxLossDeals && isNegativeProfit;
      const minRichProfitDealsIsNotReached = isAlmostCompletedPage && !isEnoughNumberOfRichDeals && !isRichProfit;
      const maxAssetDuplicatesIsReached =
        (currentPage?.assetDuplicatesCounter?.[deal.asset] ?? 0) >= maxAssetDuplicates;

      if (maxLossDealsIsReached || minRichProfitDealsIsNotReached || maxAssetDuplicatesIsReached) isSkippedDeal = true;

      // removes page with number of items less than page size
      if (index === (sortedByDateDeals.length - 1) && dealsLength < pageSize) {
        delete resultContainer[page];

        return resultContainer;
      }

      return isSkippedDeal
        ? resultContainer
        : {
        ...resultContainer,
        [page]: {
          ...currentPage,
          lossDealsCounter: isNegativeProfit
            ? (currentPage?.lossDealsCounter ?? 0) + 1
            : (currentPage?.lossDealsCounter ?? 0),
          richProfitDealsCounter: isRichProfit
            ? (currentPage?.richProfitDealsCounter ?? 0) + 1
            : (currentPage?.richProfitDealsCounter ?? 0),
          assetDuplicatesCounter: {
            ...currentPage?.assetDuplicatesCounter,
            [deal.asset]: (currentPage?.assetDuplicatesCounter?.[deal.asset] ?? 0) + 1,
          },
          deals: [...(currentPage?.deals ?? []), deal],
        },
      };
    }, {
      1: initialHistoryPageData,
    });

    const pagesMap = new Map(Object.entries(pagesContainer).map(([key, value]) => [parseInt(key, 10), value.deals]));

    return {
      pagesMap: pagesMap,
      totalPages: pagesMap.size,
    };
  },
);

export default historySlice.reducer;
