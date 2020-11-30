import {InputHTMLAttributes} from 'react';
import {IStyledTheme} from '../GlobalStyle/types';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean | string;
}

export interface IStyledInput extends IInputProps, IStyledTheme {}
