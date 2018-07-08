import React, { Component } from 'react';
import contract from 'truffle-contract';
import { connect } from 'react-redux';
import ethUtil from 'ethereumjs-util';

import { getWeb3, getAccounts } from './getWeb3';
import { fetchedWeb3, fetchedEthAddress } from '../redux/web3/actions';
import { fetchedContracts } from '../redux/contracts/actions';
import { getMnemonic } from '../NATIVE/keychainOps';

export default (SuccessRoute, FailureRoute, network) => {
  return class Web3Manager extends Component {
    constructor(props){
      super(props);
      this.state = {
        mnemonic: false,
      }
    }

    async componentDidMount() {
      const { password } = await getMnemonic();
      if (password) this.setState({ mnemonic: password }, () => this.collectBlockchainInfo(password))
      else this.setState({ mnemonic: '' });
      this.collectBlockchainInfo(password)
    }

    // componentDidUpdate() {
    //   // need to re-invoke this.initializeContracts when network changes
    // }

    async collectBlockchainInfo(mnemonic) {
      try {
        const web3 = await getWeb3(network, mnemonic);
        global.web3 = web3;

        const accounts = await getAccounts(web3);
        global.accounts = accounts;
      } catch (err) {
        throw new Error(err)
      }
    }

    render() {
      const RenderedView = this.state.mnemonic ? SuccessRoute : FailureRoute;
      return (
        <RenderedView />
      );
    }
  }
}

