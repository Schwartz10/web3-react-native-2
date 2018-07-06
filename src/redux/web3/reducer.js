import {
  FETCHED_WEB3,
  FETCHED_ETH_ADDRESS
} from './actionTypes';
import web3InitialState from './initialState';

const reducer = (state = web3InitialState, action) => {
  switch (action.type) {
    case FETCHED_WEB3:
      return { ...state, web3: action.web3 }
    case FETCHED_ETH_ADDRESS:
      return { ...state, address: action.address }
    default:
      return state;
  }
}

export default reducer;
