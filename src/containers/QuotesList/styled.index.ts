import {media} from 'styled-bootstrap-grid';
import styled, {css} from 'styled-components';
import {IStyledIconButton} from './types';

export const TableWrap = styled.div`
  th:first-child,
  td:first-child {
    padding-left: 20px;

    ${media.md`
      padding-left: 35px;
    `}
  }

  td {
    font-size: 16px;
    line-height: 21.79px;

    ${media.md`
      font-size: 20px;
      line-height: 27.24px;
    `}
  }
`;

export const IconButton = styled.button<IStyledIconButton>`
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover svg {
      fill: ${({theme}) => theme.palette.persianBlue};
    }
  }

  svg {
    ${({theme, isFavorite}) => isFavorite && css`
      fill: ${theme.palette.midnightBlue};
    `}
    path {
      stroke: ${({theme}) => theme.palette.midnightBlue};
    }
  }
`;
