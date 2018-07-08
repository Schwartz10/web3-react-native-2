import React, { Component } from 'react';
import { View, Text } from 'react-native'

export default class Wallet extends Component {
  render(){
    console.log(this.props.accounts)
    return (
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          You Are logged in as account: {global.accounts}
        </Text>
      </View>
    );
  }
}