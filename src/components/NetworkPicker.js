import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class NetworkPicker extends Component {
  render(){
    const { handleNetworkChange } = this.props;
    return (
      <View>
        <Button title="mainnet" onPress={() => handleNetworkChange('https://mainnet.infura.io/')} />
        <Button title="rinkeby" onPress={() => handleNetworkChange('https://rinkeby.infura.io/')} />
        <Button title="ropsten" onPress={() => handleNetworkChange('https://ropsten.infura.io/')} />
        {/* <Button title="other" onPress={() => handleNetworkChange('other')} /> */}
      </View>
    );
  }
}