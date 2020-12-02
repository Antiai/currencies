import { createSlice } from '@reduxjs/toolkit';
import {RootState} from '../../config/store';
import {ILoadingState} from './types';

const initialState: ILoadingState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state: ILoadingState) => {
      state.isLoading = true;
    },
    stopLoading: (state: ILoadingState) => {
      state.isLoading = initialState.isLoading;
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;

export const loadingSelector = (state: RootState) => state.loading;

export default loadingSlice.reducer;
