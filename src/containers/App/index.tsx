import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Layout} from '../../components';
import Login from '../Login';
import Main from '../Main';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Main}/>
      </Switch>
    </Layout>
  );
}

export default App;
