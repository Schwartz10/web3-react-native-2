import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Wallet from '../pages/Wallet';
import MnemonicCollector from '../pages/MnemonicCollector';
import NetworkPicker from '../components/NetworkPicker';

import { getWeb3, getAccounts } from './getWeb3';
import web3EventEmitter from './events';
import { getMnemonic } from '../NATIVE/keychainOps';

export default class Web3Manager extends Component {
  constructor(props){
    super(props);
    this.state = {
      network: 'https://rinkeby.infura.io/',
      mnemonic: false,
      dataLoaded: false
    }
    this.handleNetworkChange = this.handleNetworkChange.bind(this);
    this.handleMnemonicChange = this.handleMnemonicChange.bind(this);
  }

  handleNetworkChange(network){
    web3EventEmitter._changedNetwork(network);
    this.setState({ network })
  }

  handleMnemonicChange(mnemonic){ this.setState({ mnemonic }) }

  async componentDidMount() {
    if (!global.web3) global.web3 = null;
    if (!global.accounts) global.accounts = null;

    const { password } = await getMnemonic();
    if (password) this.setState({ mnemonic: password }, () => this.collectBlockchainInfo(password))
    else this.setState({ mnemonic: '' });
  }

  componentDidUpdate(prevProps, { network, mnemonic }) {
    const networkChanged = this.state.mnemonic &&  network !== this.state.network;
    const mnemonicChanged = this.state.mnemonic && mnemonic !== this.state.mnemonic;
    if (networkChanged || mnemonicChanged) this.collectBlockchainInfo(this.state.mnemonic);
  }

  async collectBlockchainInfo(mnemonic) {
    // populate global react-native vars with web3 and account information
    try {
      const web3 = await getWeb3(this.state.network, mnemonic);
      global.web3 = web3;

      const accounts = await getAccounts(web3);
      global.accounts = accounts[0];
      web3EventEmitter._changedAccount(accounts[0]);
    } catch (err) {
      throw new Error(err)
    }

    this.setState({ dataLoaded: true });
  }

  render() {
    return (
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          Wallet
        </Text>

        <NetworkPicker
          handleNetworkChange={this.handleNetworkChange}
          activeNetwork={this.state.network}
        />
        {
          this.state.mnemonic
          ? <Wallet
              accounts={this.state.accounts}
              network={this.state.network}
            />
          : <MnemonicCollector
              accounts={this.state.accounts}
              handleMnemonicChange={this.handleMnemonicChange}
            />
        }
      </View>
    );
  }
}

