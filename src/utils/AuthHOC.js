import React, { Component } from 'react';
import { View } from 'react-native';

import { getMnemonic } from '../NATIVE/keychainOps';
import MnemonicCollector from './MnemonicCollector';

export default (SuccessRoute) => (
  class AuthHOC extends Component {
    constructor(props) {
      super(props);
      this.state = { hasMnemonic: false }
    }

    componentDidMount() { this.checkMnemonic() }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.hasMnemonic !== this.state.hasMnemonic) this.checkMnemonic();
    }

    async checkMnemonic() {
      // UNSAFE
      const mnemonic = await getMnemonic();
      if (!mnemonic) this.setState({ hasMnemonic: false });
      else this.setState({ hasMnemonic: true });
    }

    render() {
      return (
        <View>
          {this.state.hasMnemonic
            ? <SuccessRoute {...this.props} />
            : <MnemonicCollector />
          }
        </View>
      );
    }
  }
)
