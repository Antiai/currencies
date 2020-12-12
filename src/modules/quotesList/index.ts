import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {quotesListApi} from '../../api';
import {AppThunk, RootState} from '../../config/store';
import {storage, stringUtils} from '../../utils';
import {stopLoading, startLoading} from '../loading';
import {IQuote, IQuotesListState} from './types';

const localStorageKey = 'favoriteIds';

const initialState: IQuotesListState = {
  ids: [],
  byId: {},
  favoriteIds: storage.getItem<string[]>(localStorageKey, []),
  errors: '',
};

export const quotesListSlice = createSlice({
  name: 'quotesList',
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

      storage.setItem(localStorageKey, state.favoriteIds);

      state.favoriteIds.unshift(action.payload);
    },
    removeFromFavorites: (state: IQuotesListState, action: PayloadAction<string>) => {
      if (!action.payload) return;

      const filteredFavoriteIds = state.favoriteIds.filter(id => id !== action.payload);

      storage.setItem(localStorageKey, filteredFavoriteIds);

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
    const fullCurrenciesList = ids.reduce<string[]>((rawList, id) => [...rawList, ...stringUtils.split(id)], []);
    const processedList = new Set(fullCurrenciesList);

    const {directRatesMap, reversedRatesMap} = ids.reduce((rateMaps, id) => {
      const quote = parseFloat(byId[id].quote as string);

      rateMaps.directRatesMap.set(id, quote);
      rateMaps.reversedRatesMap.set(stringUtils.reverse(id), 1 / quote);

      return rateMaps;
    }, {
      directRatesMap: new Map(),
      reversedRatesMap: new Map()
    });

    return {
      fullCurrenciesList: Array.from(processedList),
      directRatesMap,
      reversedRatesMap,
    };
  }
);

export default quotesListSlice.reducer;
