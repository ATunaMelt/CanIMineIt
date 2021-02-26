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
    return (
      <tr>
        <td>{this.props.crypto.name}</td>
        <td>{chain}</td>
        <td> $55,000</td>
        <td> {difficulty} </td>
      </tr>
    );
  }
}

export default SingleCrypto;
