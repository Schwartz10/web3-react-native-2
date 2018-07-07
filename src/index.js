import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {View} from 'react-native'

import Wallet from './pages/Wallet';
import Web3Manager from './utils/Web3Manager';
import Home from './pages/Home';
import SimpleStorageContract from '../build/contracts/SimpleStorage.json';

// to be extracted
const network = "https://ropsten.infura.io/"
const contracts = [ SimpleStorageContract ]

// any Screen that needs web3 to access can be passed through the web3Manager HOC
const AuthorizedHomePage = Web3Manager(Home, network, contracts);

export default TabNavigator({
  Home: {
    screen: AuthorizedHomePage
  },
  Wallet: {
    screen: Wallet
  }
});