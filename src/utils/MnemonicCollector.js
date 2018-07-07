import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class MnemonicCollector extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Type in your mnemonic' };
  }

  render(){
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}