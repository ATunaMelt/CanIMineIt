import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './index';

let middleware = [thunkMiddleware.withExtraArgument({ axios })];
if (process.browser) {
  middleware = [...middleware, createLogger({ collapsed: true })];
}

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
