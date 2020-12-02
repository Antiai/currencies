import {media} from 'styled-bootstrap-grid';
import styled, {css} from 'styled-components';
import {IStyledHeaderCell} from './types';

export const Root = styled.div`
  padding-bottom: 50px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledHead = styled.thead`
  display: block;
`;

export const StyledBody = styled.tbody`
  display: block;
  padding-top: 16px;
  height: 350px;
  overflow: auto;
`;

export const StyledHeaderCell = styled.th<IStyledHeaderCell>`
  font: ${({theme}) => theme.typography.fonts.mobile.tableHeadCell};
  color: ${({theme}) => theme.palette.white};
  text-align: left;
  padding: 8px 6px 10px;
  background-color: ${({theme}) => theme.palette.midnightBlue};
  
  ${({width}) => width && css`
    width: ${width};
    min-width: ${width};
    max-width: ${width};
  `}
  
  ${({theme}) => media.md`
    font: ${theme.typography.fonts.desktop.tableHeadCell};
    padding: 17px 14px 20px;
  `}
`;

export const SkeletonRow = styled.tr`
  display: block;
  
  td[colspan]:first-child {
    padding-left: 0;
  }
`;

export const SkeletonCell = styled.td`
  display: block;
`;