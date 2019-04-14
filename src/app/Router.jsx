import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Welcome from 'views/Welcome/Welcome';
import history from 'app/history';
import store from 'app/store';

const Layout = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div id="main-container">
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Redirect to="/welcome" />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Layout;
