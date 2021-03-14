import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
class SingleCrypto extends Component {
  getDifficulty() {
    return this.props.crypto.data.difficulty ? (
      this.props.crypto.data.difficulty
    ) : this.props.isLoading ? (
      this.renderSpinner()
    ) : (
      <div>No data :(</div>
    );
  }
  getChain() {
    return this.props.crypto.data.chain ? (
      this.props.crypto.data.chain
    ) : this.props.isLoading ? (
      this.renderSpinner()
    ) : (
      <div>No data :(</div>
    );
  }
  getTransactions() {
    return this.props.crypto.data.transactions ? (
      this.props.crypto.data.transactions
    ) : this.props.isLoading ? (
      this.renderSpinner()
    ) : (
      <div>No data :(</div>
    );
  }

  renderSpinner() {
    return (
      <div>
        <Spinner animation='border' role='status'></Spinner>
        <span className='sr-only'>🚀</span>
      </div>
    );
  }
  render() {
    let difficulty = this.getDifficulty();
    let chain = this.getChain();
    let transactions = this.getTransactions();
    return (
      <tr>
        <td>{this.props.crypto.name}</td>
        <td>{chain}</td>
        <td> {transactions}</td>
        <td> {difficulty} </td>
      </tr>
    );
  }
}

export default SingleCrypto;
