import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {authApi} from '../../api';
import {AppThunk} from '../../config/store';
import {IAuthState} from './types';
import { startLoading, stopLoading } from '../loading';

const initialState: IAuthState = {
  userToken: localStorage.getItem('userToken') as string,
  errors: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state: IAuthState) => {
      state.errors = initialState.errors;
    },
    signInSuccess: (state: IAuthState, action: PayloadAction<string>) => {
      state.errors = initialState.errors;
      state.userToken = action.payload;
    },
    signInFailure: (state: IAuthState, action: PayloadAction<string>) => {
      state.errors = action.payload;
      state.userToken = '';
    },
    signOut: (state: IAuthState) => {
      localStorage.removeItem('userToken');
      state.userToken = '';
    },
  },
});

export const { signIn, signInSuccess, signInFailure, signOut } = authSlice.actions;

export const authorize = (credentials: { login: string, password: string }): AppThunk => async dispatch => {
  dispatch(startLoading());
  dispatch(signIn());
  const {result: userToken, error} = await authApi.signIn(credentials);

  if (error) {
    dispatch(signInFailure(error));
    dispatch(stopLoading());
    return;
  }

  localStorage.setItem('userToken', userToken);

  dispatch(signInSuccess(userToken));
  dispatch(stopLoading());
};

export default authSlice.reducer;
