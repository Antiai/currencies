import {media} from 'styled-bootstrap-grid';
import styled, {css} from 'styled-components';
import {IStyledTheme} from '../../../GlobalStyle/types';
import {IStyledCell} from './types';

export const Root = styled.tr<IStyledTheme>`
  position: relative;
  display: flex;
  justify-content: stretch;
  align-items: center;

  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      margin-right: 5px;
      margin-left: 5px;
      height: 1px;
      width: calc(100% - 10px);
      background-color: ${({theme}) => theme.palette.gainsboro};
    }
  }
`;

export const StyledCell = styled.td<IStyledCell>`
  font: ${({theme}) => theme.typography.fonts.mobile.tableCell};
  text-align: left;
  padding: 4px 6px 6px;
  
  ${({width}) => width && css`
    width: ${width};
    max-width: ${width};
    min-width: ${width};
  `}
  
  ${({theme}) => media.md`
    font-size: ${theme.typography.fontSizes.desktop.tableCell};
    line-height: ${theme.typography.lineHeights.desktop.tableCell};
    padding: 10px 14px 13px;
  `}
`;