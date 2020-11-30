import styled, {css} from 'styled-components';
import {IStyledInput} from './types';

export const StyledInput = styled.input<IStyledInput>`
  font: ${({theme}) => theme.typography.fonts.desktop.input};
  width: 100%;
  border: 1px solid ${({theme}) => theme.palette.midnightBlue};
  border-radius: 5px;
  padding: 9px 10px;
  transition: border-color 0.2s ease-in-out;
  outline: none;
  
  &:disabled {
    opacity: 50%;
    background-color: ${({theme}) => theme.palette.gainsboro};
  }
 
  &::placeholder {
    color: ${({theme}) => theme.palette.black};
    opacity: 50%;
  }
  
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    border-color: ${({theme}) => theme.palette.persianBlue};
  }
  
  ${({error, theme}) => error && css`
    border-color: ${theme.palette.persianRed};
  `}
`;