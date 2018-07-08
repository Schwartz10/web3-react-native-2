import React, { Component } from 'react';
import { View, Text } from 'react-native'

export default class Wallet extends Component {
  render(){
    return (
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          You Are logged in as account: {global.accounts} on network: {global.network}
        </Text>
      </View>
    );
  }
}