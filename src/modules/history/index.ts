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
  (ids, byId) => {
    return ids.map(id => byId[id]);
  },
);

export default historySlice.reducer;
