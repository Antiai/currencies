import React, {FC, useMemo} from 'react';
import {Root, Container, StyledNavLink, TabsContainer} from './styled.index';
import {INavTabsProps} from './types';

const NavTabs: FC<INavTabsProps> = ({tabs, children, className, style}) => {
  const renderedTabs = useMemo(() => tabs.map(({id, to, label, ...rest}) => (
    <StyledNavLink key={id} to={to} {...rest}>{label}</StyledNavLink>
  )), [tabs]);

  return (
    <Root className={className} style={style}>
      <TabsContainer>
        {renderedTabs}
      </TabsContainer>
      <Container>
        {children}
      </Container>
    </Root>
  );
};

export default NavTabs;
