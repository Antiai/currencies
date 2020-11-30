import { createSlice } from '@reduxjs/toolkit';
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

export default loadingSlice.reducer;
