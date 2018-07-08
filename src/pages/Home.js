import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'

import NetworkPicker from '../components/NetworkPicker';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: 'mainnet',
    }
    this.handleNetworkChange = this.handleNetworkChange.bind(this);
  }

  handleNetworkChange(network){ this.setState({ network }) }

  render() {
    return (
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          Wallet
        </Text>

        <NetworkPicker
          handleNetworkChange={this.handleNetworkChange}
          activeNetwork={this.state.network}
        />
      </View>
    )
  }
}