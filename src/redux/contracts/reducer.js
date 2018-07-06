import { FETCHED_CONTRACTS } from './actionTypes';
import contractsInitialState from './initialState';

const reducer = (state = contractsInitialState, action) => {
  switch (action.type) {
    case FETCHED_CONTRACTS:
      return [ ...state, action.contracts ]
    default:
      return state;
  }
}

export default reducer;
