import { Table } from 'react-bootstrap';
import SingleCrypto from './SingleCrypto';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getBTCData,
  getETHData,
  getDOGData,
  getLTCData,
  getBCHData,
} from '../redux/index';

class Main extends Component {
  _loading = true;
  async componentDidMount() {
    await this.props.getBTCData();
    await this.props.getETHData();
    await this.props.getDOGData();
    setTimeout(async () => {
      await this.props.getLTCData();
      await this.props.getBCHData();
      this._loading = false;
      this.forceUpdate();
    }, 3500);
    // render wasn't updating after props updated
    this.forceUpdate();
  }
  componentDidUpdate() {
    this._loading = false;
  }
  render() {
    let cryptos = this.props.cryptos;
    return (
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th> Name </th>
            <th>Chain</th>
            <th>Price</th>
            <th>Difficulty</th>
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
  return {
    getBTCData: () => dispatch(getBTCData()),
    getETHData: () => dispatch(getETHData()),
    getDOGData: () => dispatch(getDOGData()),
    getLTCData: () => dispatch(getLTCData()),
    getBCHData: () => dispatch(getBCHData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
