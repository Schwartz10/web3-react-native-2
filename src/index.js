import React, { Component } from 'react';
import {View} from 'react-native'

import Wallet from './pages/Wallet';
import Web3Manager from './utils/Web3Manager';
import Home from './pages/Home';
import MnemonicCollector from './pages/MnemonicCollector';
import SimpleStorageContract from '../build/contracts/SimpleStorage.json';

// to be extracted
const network = "https://rinkeby.infura.io/"

// any Screen that needs web3 to access can be passed through the web3Manager HOC
const AuthorizedHomePage = Web3Manager(Wallet, MnemonicCollector, network);

export default class ContainerComponent extends Component {

  render(){
    return(
      <View>
        <Home />
        <AuthorizedHomePage />
      </View>
    );
  }
}