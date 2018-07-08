import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class NetworkPicker extends Component {
  render(){
    const { handleNetworkChange } = this.props;
    return (
      <View>
        <Button title="mainnet" onPress={() => handleNetworkChange('mainnet')} />
        <Button title="rinkeby" onPress={() => handleNetworkChange('rinkeby')} />
        <Button title="ropsten" onPress={() => handleNetworkChange('ropsten')} />
        {/* <Button title="other" onPress={() => handleNetworkChange('other')} /> */}
      </View>
    );
  }
}