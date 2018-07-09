const EventEmitter = require('events');

class Web3ChangeEvents extends EventEmitter {
  _changedAccount(account){
    this.emit('changedAccount', { data: account });
  }

  _changedNetwork(network){
    this.emit('changedNetwork', { data: network });
  }
}

const web3EventEmitter = new Web3ChangeEvents();
export default web3EventEmitter;
