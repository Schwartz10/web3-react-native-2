import web3InitialState from './web3/initialState';
import contractsInitialState from './contracts/initialState';

const initialState = {
  web3: web3InitialState,
  contracts: contractsInitialState
}

export default initialState;
