import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import reducer from './reducer';
import initialState from './initialState'

const store = createStore(reducer, initialState,
  composeWithDevTools(applyMiddleware(
    thunk,
    createLogger({ stateTransformer: state => state }))
  )
);

export default store;
