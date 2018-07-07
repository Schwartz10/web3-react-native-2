import './shim';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Routes from './src';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
