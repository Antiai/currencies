import styled from 'styled-components';
import {IStyledTheme} from '../GlobalStyle/types';

export const Root = styled.div<IStyledTheme>`
  height: 100vh;
`;

export const StyledMain = styled.main`
  display: flex;
`;

export const ContentWrap = styled.div`
  margin: auto;
  overflow: hidden;
`;
