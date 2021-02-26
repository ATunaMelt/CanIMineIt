import { Table } from 'react-bootstrap';
import SingleCrypto from './SingleCrypto';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBTCData, getETHData } from '../redux/index';

class Main extends Component {
  _loading = true;
  async componentDidMount() {
    await this.props.getBTCData();
    await this.props.getETHData();
    this._loading = false;
    // render wasn't updating after props updated
    this.forceUpdate();
  }
  componentDidUpdate() {
    console.log('component did update');
    this._loading = false;
  }
  render() {
    console.log('\n --------🚀 \n RENDER \n this._loading', this._loading);
    // Case 1 : Loading
    // Case 2 : Loading Complete, but no data
    // Case 3 : Loading Complete, and have data
    let cryptos = this.props.cryptos;

    return (
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th> Name </th>
            <th>Ticker</th>
            <th>Price</th>
            <th>HashPower for one Block</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((current, idx) => {
            return (
              <SingleCrypto
                key={idx + 1}
                crypto={current}
                isLoading={this._loading}
              />
            );
          })}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return { cryptos: state };
};

const mapDispatchToProps = (dispatch) => {
  console.log('in map dispatch');
  return {
    getBTCData: () => dispatch(getBTCData()),
    getETHData: () => dispatch(getETHData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
