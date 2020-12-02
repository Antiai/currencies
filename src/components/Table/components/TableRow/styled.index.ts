import {media} from 'styled-bootstrap-grid';
import styled, {css} from 'styled-components';
import {IStyledTheme} from '../../../GlobalStyle/types';
import {IStyledCell} from './types';

export const Root = styled.tr<IStyledTheme>`
  display: block;
  &:not(:last-child) {
    &::after {
      content: '';
      display: block;
      margin-right: 5px;
      margin-left: 5px;
      height: 1px;
      background-color: ${({theme}) => theme.palette.gainsboro};
    }
  }
`;

export const StyledCell = styled.td<IStyledCell>`
  font: ${({theme}) => theme.typography.fonts.desktop.tableCell};
  text-align: left;
  padding: 4px 6px 6px;
  
  ${({width}) => width && css`
    width: ${width};
    max-width: ${width};
    min-width: ${width};
  `}
  
  ${media.md`
    padding: 10px 14px 13px;
  `}
`;