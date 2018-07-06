import { FETCHED_CONTRACTS } from './actionTypes';

export const fetchedContracts = contracts => dispatch => (
  dispatch({
    type: FETCHED_CONTRACTS,
    contracts
  })
);
