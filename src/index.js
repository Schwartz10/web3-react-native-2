import React, { Component } from 'react';
import { View, Text } from 'react-native'

import Wallet from './pages/Wallet';
import Web3ManagerHOC from './utils/Web3Manager';
import MnemonicCollector from './pages/MnemonicCollector';
import NetworkPicker from './components/NetworkPicker';

// to be extracted
const network = "https://rinkeby.infura.io/"

// any Screen that needs web3 to access can be passed through the web3Manager HOC
const Web3Manager = Web3ManagerHOC(Wallet, MnemonicCollector);

export default class ContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: 'https://rinkeby.infura.io/',
    }
    this.handleNetworkChange = this.handleNetworkChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps, prevState)
  }

  handleNetworkChange(network){ this.setState({ network }) }

  render(){
    return(
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          Wallet
        </Text>

        <NetworkPicker
          handleNetworkChange={this.handleNetworkChange}
          activeNetwork={this.state.network}
        />
        <Web3Manager network={this.state.network} />
      </View>
    );
  }
}