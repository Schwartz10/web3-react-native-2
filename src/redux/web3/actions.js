import {
  FETCHED_WEB3,
  FETCHED_ETH_ADDRESS
} from './actionTypes';

export const fetchedWeb3 = web3 => dispatch => (
  dispatch({
    type: FETCHED_WEB3,
    web3
  })
);

export const fetchedEthAddress = address => dispatch => (
  dispatch({
    type: FETCHED_ETH_ADDRESS,
    address
  })
);
