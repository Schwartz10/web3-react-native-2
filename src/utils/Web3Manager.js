import React, { Component } from 'react';
import contract from 'truffle-contract';

import { getWeb3, getAccounts } from './getWeb3';

export default class Web3Manager extends Component {
  async componentDidMount() {
    try {
      const web3 = await getWeb3(this.props.network);
      const accounts = await getAccounts(web3);
      this.initializeContracts(web3)
    } catch (err) {
      throw new Error(err)
    }
  }

  initializeContracts(web3) {
    return Promise.all(this.props.contracts.map(async contractJson => {
      try {
        const truffleContract = contract(contractJson);
        truffleContract.setProvider(web3.currentProvider);
        // const contractInstance = await truffleContract.deployed();
        const contractInstance = await truffleContract.at('0x01dc2837360d57fe3b596d98e0ef56dbb945690c');
        return contractInstance;
      } catch (err) {
        return console.log(err)
      }
    }));
  }

  render() {
    return ( null );
  }
}

