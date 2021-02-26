// import axios from 'axios';
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

  renderSpinner() {
    return (
      <div>
        <Spinner animation='border' role='status'></Spinner>
        <span className='sr-only'>🚀</span>
      </div>
    );
  }
  render() {
    // if(this.props.isLoading)
    console.log('this . PROPS IN SINGLE CRYPTO', this.props);
    let difficulty = this.getDifficulty();

    let ticker = this.props.crypto.data.currency ? (
      this.props.crypto.data.currency
    ) : this.props.isLoading ? (
      <div>
        <Spinner animation='border' role='status'></Spinner>
        <span className='sr-only'>🚀</span>
      </div>
    ) : (
      <div>No data :(</div>
    );
    return (
      <tr>
        <td>{this.props.crypto.name}</td>
        <td>{ticker}</td>
        <td> $55,000</td>
        <td> {difficulty} </td>
      </tr>
    );
  }
}

export default SingleCrypto;
