import React, {FC, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Switch, useHistory, Route, Redirect } from 'react-router-dom';
import {RootState} from '../../config/store';
import Converter from '../Converter';
import QuotesList from '../QuotesList';
import {tabs} from './config';
import {StyledNavTabs} from './styled.index';

const Main: FC = () => {
  const history = useHistory();
  const {userToken} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (userToken) return;

    history.replace('/login');
  }, [history, userToken]);

  return (
    <StyledNavTabs tabs={tabs}>
      <Switch>
        <Route path="/quotes" component={QuotesList} />
        <Route path="/converter" component={Converter} />
        <Redirect exact path="/" to="/quotes" />
      </Switch>
    </StyledNavTabs>
  );
};

export default Main;
