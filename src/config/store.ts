import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../modules/auth';
import loadingReducer from '../modules/loading';
import quotesListReducer from '../modules/quotesList';
import historyReducer from '../modules/history';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    quotesList: quotesListReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
