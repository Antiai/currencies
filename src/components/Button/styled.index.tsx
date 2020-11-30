import styled, {css} from 'styled-components';
import {ButtonSizesEnum, ButtonVariantsEnum, IStyledButton} from './types';

export const StyledButton = styled.button<IStyledButton>`
  font: ${({theme}) => theme.typography.fonts.desktop.button};
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  
  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }

  ${({theme, variant}) => variant === ButtonVariantsEnum.filled && css`
    color: ${theme.palette.white};
    background-color: ${theme.palette.midnightBlue};
    border: none;
    transition: background-color 0.2s ease-in-out;
    
    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      background-color: ${theme.palette.persianBlue};
    }

    &:active:not(:disabled) {
      background-color: ${theme.palette.midnightBlueDark};
    }
  `}
  
  ${({theme, variant}) => variant === ButtonVariantsEnum.outlined && css`
    color: ${theme.palette.midnightBlue};
    background-color: transparent;
    border: 1px solid ${theme.palette.midnightBlue};
    
    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      color: ${theme.palette.persianBlue};
      border-color: ${theme.palette.persianBlue};
    }

    &:active:not(:disabled) {
      color: ${theme.palette.midnightBlueDark};
      border-color: ${theme.palette.midnightBlueDark};
    }
  `}
  
  ${({size}) => size === ButtonSizesEnum.medium && css`
    padding: 8px 32px 10px;
  `}
  
  ${({size}) => size === ButtonSizesEnum.small && css`
    padding: 2px 40px 6px;
  `}
`;