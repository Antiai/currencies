import React, {FC, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Switch, useHistory, Route, Redirect } from 'react-router-dom';
import {RootState} from '../../config/store';
import QuotesList from '../QuotesList';

interface IMainProps {
}

const Main: FC<IMainProps> = (props) => {
  const history = useHistory();
  const {userToken} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (userToken) return;

    history.replace('/login');
  }, [history, userToken]);

  return (
    <Switch>
      <Route path="/quotes" component={QuotesList} />
      <Redirect exact path="/" to="/quotes" />
    </Switch>
  );
};

export default Main;
