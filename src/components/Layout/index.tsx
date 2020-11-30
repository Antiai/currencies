import React, {FC} from 'react';
import Header from '../../containers/Header';
import {ContentWrap, Root, StyledMain} from './styled.index';

const Layout: FC = ({children}) => (
  <Root>
    <Header />
    <StyledMain><ContentWrap>{children}</ContentWrap></StyledMain>
  </Root>
);

export default Layout;
