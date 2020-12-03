import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {quotesListApi} from '../../api';
import {AppThunk, RootState} from '../../config/store';
import {stopLoading, startLoading} from '../loading';
import {IQuote, IQuotesListState} from './types';

const initialState: IQuotesListState = {
  ids: [],
  byId: {},
  favoriteIds: JSON.parse(localStorage.getItem('favoriteIds') as string) ?? [],
  errors: '',
};

export const quotesListSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getQuotesList: (state: IQuotesListState) => {
      state.errors = initialState.errors;
    },
    getQuotesListSuccess: (state: IQuotesListState, action: PayloadAction<IQuote[]>) => {
      state.errors = initialState.errors;
      state.ids = action.payload.map(quote => quote.asset as string);
      state.byId = action.payload
        .reduce((quotesById, quote) => ({...quotesById, [quote.asset as string]: quote}), {});
    },
    getQuotesListFailure: (state: IQuotesListState, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },
    addToFavorites: (state: IQuotesListState, action: PayloadAction<string>) => {
      if (!action.payload) return;

      state.favoriteIds.unshift(action.payload);

      localStorage.setItem('favoriteIds', JSON.stringify(state.favoriteIds));
    },
    removeFromFavorites: (state: IQuotesListState, action: PayloadAction<string>) => {
      if (!action.payload) return;

      const filteredFavoriteIds = state.favoriteIds.filter(id => id !== action.payload);

      localStorage.setItem('favoriteIds', JSON.stringify(filteredFavoriteIds));

      state.favoriteIds = filteredFavoriteIds;
    }
  },
});

export const {
  getQuotesList,
  getQuotesListSuccess,
  getQuotesListFailure,
  addToFavorites,
  removeFromFavorites
} = quotesListSlice.actions;

export const fetchQuotesList = (): AppThunk => async dispatch => {
  dispatch(startLoading());
  dispatch(getQuotesList());
  const {assets: quotesList, error} = await quotesListApi.getQuotesList();

  if (error) {
    dispatch(getQuotesListFailure(error));
    dispatch(stopLoading());
    return;
  }

  dispatch(getQuotesListSuccess(quotesList as IQuote[]));
  dispatch(stopLoading());
};

export const quotesListSelector = createSelector(
  (state: RootState) => state.quotesList.ids,
  (state: RootState) => state.quotesList.byId,
  (state: RootState) => state.quotesList.favoriteIds,
  (ids, byId, favoriteIds) => {
    const favoriteIdsMap = new Map();
    const favoritesList = favoriteIds.map(favoriteId => {
      favoriteIdsMap.set(favoriteId, true);

      return {...byId[favoriteId], isFavorite: true};
    });
    const filteredList = ids.filter(id => !favoriteIdsMap.get(id)).map(id => byId[id]);

    return [...favoritesList, ...filteredList];
  }
);

export const exchangeRatesSelector = createSelector(
  (state: RootState) => state.quotesList.ids,
  (state: RootState) => state.quotesList.byId,
  (ids, byId) => {
    const fullCurrenciesList = ids.reduce<string[]>((rawList, id) => [...rawList, ...id.split('/')], []);
    const processedList = new Set(fullCurrenciesList);

    const directRatesMap = new Map(ids.map(id => [id, parseFloat(byId[id].quote as string)]));
    const reversedRatesMap = new Map(ids.map(id => [
      id.split('/').reverse().join('/'),
      1 / parseFloat(byId[id].quote as string)
    ]));


    return {
      fullCurrenciesList: Array.from(processedList),
      directRatesMap,
      reversedRatesMap,
    };
  }
);

export default quotesListSlice.reducer;
