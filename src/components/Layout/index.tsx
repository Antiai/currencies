import React, {FC} from 'react';
import Header from '../Header';
import {ContentWrap, Root, StyledMain} from './styled.index';
import {ILayoutProps} from './types';

const Layout: FC<ILayoutProps> = ({children}) => {

  return (
    <Root>
      <Header />
      <StyledMain><ContentWrap>{children}</ContentWrap></StyledMain>
    </Root>
  );
};

export default Layout;
