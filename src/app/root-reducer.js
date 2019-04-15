import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import analyticsReducer from './analytics-reducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  analytics: analyticsReducer,
});

export default rootReducer;
