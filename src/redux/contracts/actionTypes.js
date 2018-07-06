/*
It's conceivable that we would want to fetch contracts on load, or in different parts of the application. Figured it would be nice to have our contracts in the redux store so we can access them from any component and only have to instantiate them one time

It will also be nice to do contract specific "things" in our own file, easier for debugging and for cleanliness
*/

export const FETCHED_CONTRACTS = 'FETCHED_CONTRACTS';
// export const FETCHED_CONTRACT = 'FETCHED_CONTRACT';
