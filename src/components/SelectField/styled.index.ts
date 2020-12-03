import styled from 'styled-components';
import {IStyledTheme} from '../GlobalStyle/types';

export const Root = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const StyledLabel = styled.span<IStyledTheme>`
  font: ${({theme}) => theme.typography.fonts.desktop.label};
  color: ${({theme}) => theme.palette.black};
  display: block;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 4px;
  cursor: pointer;
`;
