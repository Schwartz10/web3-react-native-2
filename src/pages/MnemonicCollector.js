import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native'

import { setMnemonic } from '../NATIVE/keychainOps'

export default class MnemonicCollector extends Component {
  constructor(props) {
    super(props);
    this.state = { mnemonic: 'Enter your mnemonic' };
    this.onPress = this.onPress.bind(this);
  }

  async onPress() {
    const { mnemonic } = this.state;
    if (mnemonic.split(' ').length === 12) {
      // set the mnemonic in our keychain
      await setMnemonic(this.state.mnemonic);
    } else {
      throw new Error('that is not a valid seed phrase')
    }
    // when the user navigates home, they should get through the hoc
  }

  render(){
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={mnemonic => this.setState({ mnemonic })}
          value={this.state.mnemonic}
        />
        <Button
          onPress={this.onPress}
          title="Store Mnemonic"
          color="#841584"
          accessibilityLabel="Safely store your mnemonic in your phones keychain"
        />
      </View>
    );
  }
}