import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native'

import { setMnemonic } from '../NATIVE/keychainOps'

export default class MnemonicCollector extends Component {
  static navigationOptions = {
    title: 'Mnemonic'
  }

  constructor(props) {
    super(props);
    this.state = { mnemonic: 'Enter your mnemonic' };
    this.onPress = this.onPress.bind(this);
  }

  async onPress() {
    // set the mnemonic in our keychain
    await setMnemonic(this.state.mnemonic);
    // when the user navigates home, they should get through the hoc
    this.props.navigation.navigate('Home');
  }

  render(){
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={mnemonic => this.setState({mnemonic})}
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