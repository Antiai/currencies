import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../modules/auth';
import loadingReducer from '../modules/loading';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
