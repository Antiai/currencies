import React, {FC, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {ButtonVariantsEnum} from '../Button/types';
import {Logo, Root, StyledButton} from './styled.index';
import { useLocation } from 'react-router-dom';
import { signOut } from '../../modules/auth';

const Header: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const logoutIsShown = !location.pathname.includes('login');

  const handleLogout = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <Root>
      <Logo to="/">TEST SPA app</Logo>
      {logoutIsShown && (
        <StyledButton variant={ButtonVariantsEnum.outlined} onClick={handleLogout}>
          Выход
        </StyledButton>
      )}
    </Root>
  );
};

export default Header;
