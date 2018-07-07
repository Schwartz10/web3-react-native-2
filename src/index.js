import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {View} from 'react-native'

import MnemonicCollector from './utils/MnemonicCollector';
import Home from './pages/Home';
import Web3Manager from './utils/Web3Manager';
import SimpleStorageContract from '../build/contracts/SimpleStorage.json';

// to be extracted
const network = "https://ropsten.infura.io/"
const contracts = [ SimpleStorageContract ]

const AuthorizedHomePage = Web3Manager(Home, network, contracts);

export default StackNavigator({
  Home: {
    screen: AuthorizedHomePage
  },
  MnemonicCollection: {
    screen: MnemonicCollector
  }
});