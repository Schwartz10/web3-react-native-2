import Web3 from 'web3';
import { Platform } from 'react-native';
import Promise from 'bluebird';
import HDWalletProvider from 'truffle-hdwallet-provider';

export const getWeb3 = (rpcUrl) => {
  return new Promise((resolve, reject) => {
    if (!rpcUrl) return reject(new Error('No RPC Url specified'));

    const mnemonic = 'knee violin certain rebuild rival couch wonder bind bridge delay tourist poet';
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
