import Web3 from 'web3';
// platform will be used to distinguish between android and ios for local blockchain
import { Platform } from 'react-native';
import Promise from 'bluebird';
import HDWalletProvider from 'truffle-hdwallet-provider';

// need to pass provider in
export const getWeb3 = (rpcUrl, mnemonic) => {
  return new Promise((resolve, reject) => {
    if (!rpcUrl) return reject(new Error('No RPC Url specified'));
    // if (!mnemonic) return reject(new Error('No provider specified'));

    const provider = new HDWalletProvider(mnemonic, rpcUrl);

    const web3 = new Web3(provider);
    return resolve(web3);
  })
}

export const getAccounts = web3 => {
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts((err, accounts) => {
      if (err) return reject(new Error('error fetching accounts'));
      return resolve(accounts);
    })
  })
}