import React, { Component } from 'react';
import contract from 'truffle-contract';
import { connect } from 'react-redux';

import { getWeb3, getAccounts } from './getWeb3';
import { fetchedWeb3, fetchedEthAddress } from '../redux/web3/actions';
import { fetchedContracts } from '../redux/contracts/actions';

class Web3Manager extends Component {
  async componentDidMount() {
    try {
      // get web3, set it in redux
      const web3 = await getWeb3(this.props.network);
      this.props.fetchedWeb3(web3);

      // get account info, set it in redux
      const accounts = await getAccounts(web3);
      // how should we handle array of accounts?
      this.props.fetchedEthAddress(accounts[0]);

      // fetch contracts, set them in redux
      const contracts = await this.initializeContracts(web3);
      this.props.fetchedContracts(contracts);
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

export default connect(null, {
  fetchedWeb3,
  fetchedEthAddress,
  fetchedContracts
})(Web3Manager);

