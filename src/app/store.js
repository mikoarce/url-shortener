import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { routerMiddleware } from 'connected-react-router';
import history from 'app/history';
import throttle from 'redux-throttle';
import rootReducer from './root-reducer';

const defaultWait = 300;
const defaultThrottleOption = {
  leading: false,
  trailing: false,
};

const throttleMiddleware = throttle(defaultWait, defaultThrottleOption);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(throttleMiddleware, routerMiddleware(history))),
);

export default store;
