import './shim';
import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';

import Web3Manager from './src/utils/Web3Manager';
import SimpleStorageContract from './build/contracts/SimpleStorage.json';
import store from './src/redux/store';


const App = () => (
  <Provider store={store}>
    <Web3Manager
      network="https://ropsten.infura.io/"
      contracts={[ SimpleStorageContract ]}
    />
  </Provider>
);

export default App;
