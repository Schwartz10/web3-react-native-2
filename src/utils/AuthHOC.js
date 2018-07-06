import React, { Component } from 'react';

import { getMnemonic } from '../NATIVE/keychainOps';

export default (SuccessRoute) => (
  class AuthHOC extends Component {

    componentDidMount() { this.checkMnemonic() }

    componentDidUpdate() { this.checkMnemonic() }

    async checkMnemonic() {
      // UNSAFE
      const mnemonic = await getMnemonic();
      if (!mnemonic) {}//send to different page for user to enter mnemonic
    }

    render() {
      return (
        <SuccessRoute {...this.props} />
      );
    }
  }
)
