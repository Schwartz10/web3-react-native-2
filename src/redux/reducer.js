import { combineReducers } from 'redux';

import contractsReducer from './contracts/reducer';
import web3Reducer from './web3/reducer';

const reducer = combineReducers({
  web3: web3Reducer,
  contracts: contractsReducer
});

export default reducer;
