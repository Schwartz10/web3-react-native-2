import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(
  thunk,
  createLogger({ stateTransformer: state => state }))));

export default store;