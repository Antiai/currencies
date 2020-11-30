import {ButtonHTMLAttributes} from 'react';
import {IStyledTheme} from '../GlobalStyle/types';

export enum ButtonSizesEnum {
  medium = 'medium',
  small = 'small'
}

export enum ButtonVariantsEnum {
  filled = 'filled',
  outlined = 'outlined'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantsEnum;
  size?: ButtonSizesEnum;
}

export interface IStyledButton extends IStyledTheme, IButtonProps {}