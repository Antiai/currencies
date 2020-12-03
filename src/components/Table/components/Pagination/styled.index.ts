import {rgba} from 'polished';
import styled from 'styled-components';
import {IStyledTheme} from '../../../GlobalStyle/types';

export const StyledPrevButton = styled.button<IStyledTheme>`
  svg {
    transform: rotate(180deg);
  }
`;

export const StyledNextButton = styled.button<IStyledTheme>``;

export const Root = styled.div`
  position: absolute;
  bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;

  ${StyledPrevButton},
  ${StyledNextButton} {
    margin-right: 15px;
    margin-left: 15px;
    padding-left: 0;
    padding-right: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  
    svg {
      path {
        stroke: ${({theme}) => theme.palette.midnightBlue};
      }
    };
  }
`;

export const StyledForm = styled.form<IStyledTheme>`
  font: ${({theme}) => theme.typography.fonts.desktop.input};
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input {
    -moz-appearance: textfield;
  }
`;

export const StyledInput = styled.input<IStyledTheme>`
  text-align: center;
  width: 26px;
  border: 1px solid ${({theme}) => rgba(theme.palette.midnightBlue, 0.3)};
  border-radius: 2px;
  
  &:disabled {
    border: 1px solid ${({theme}) => theme.palette.gainsboro};
  }
`;

export const StyledDelimiter = styled.span`
  margin-right: 5px;
  margin-left: 5px;
`;
