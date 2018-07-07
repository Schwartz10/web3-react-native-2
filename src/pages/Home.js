import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          Balance
        </Text>
      </View>
    )
  }
}