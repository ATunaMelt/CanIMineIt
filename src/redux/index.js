// import redux from 'redux';
// import axios from 'axios';
// var axios = require('axios');
// const CryptoApis = require('cryptoapis.io');
import CryptoApis from 'cryptoapis.io';
const apiKey = '44f1e112e7f3793011fa2a3c94ad3d54969db9cd';
const caClient = new CryptoApis(apiKey);
// Initial State
const initialState = [
  { name: 'Bitcoin', data: {} },
  { name: 'eth', data: {} },
  { name: 'dog', data: {} },
  { name: 'ltc', data: {} },
  { name: 'bch', data: {} },
];
// Action
// const GET_ALL_DATA = 'GET_ALL_DATA';
const GET_BTC_DATA = 'GET_BTC_DATA';
const GET_ETH_DATA = 'GET_ETH_DATA';
const GET_DOG_DATA = 'GET_DOG_DATA';
const GET_LTC_DATA = 'GET_LTC_DATA';
const GET_BCH_DATA = 'GET_BCH_DATA';

// Action Creator
export const gotBTCData = (btcData) => {
  return {
    type: GET_BTC_DATA,
    btcData,
  };
};
export const gotETHData = (ethData) => ({
  type: GET_ETH_DATA,
  ethData,
});
export const gotDOGata = (dogData) => ({
  type: GET_DOG_DATA,
  dogData,
});
export const gotLTCData = (ltcData) => ({
  type: GET_LTC_DATA,
  ltcData,
});
export const gotBCHData = (bchData) => ({
  type: GET_BCH_DATA,
  bchData,
});
// export const getAllCryptosData = () => ({
//   type: GET_ALL_DATA,
//   data,
// });

// Thunk
export const getBTCData = () => {
  return async (dispatch) => {
    try {
      caClient.BC.BTC.getSelectedNetwork();
      caClient.BC.BTC.switchNetwork(caClient.BC.BTC.NETWORKS.TESTNET);
      let res = await caClient.BC.BTC.blockchain.getInfo();
      dispatch(gotBTCData(res.payload));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getETHData = () => {
  return async (dispatch) => {
    try {
      caClient.BC.ETH.getSelectedNetwork();
      caClient.BC.ETH.switchNetwork(caClient.BC.ETH.NETWORKS.ROPSTEN);
      let res = await caClient.BC.ETH.blockchain.getInfo();

      dispatch(gotETHData(res.payload));
    } catch (error) {
      console.log(error);
    }
  };
};

const updateState = (state, coin, payload) => {
  state = state.map((current) => {
    if (current.name === coin) {
      current.data = payload;
    }
    return current;
  });
};
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_ALL_DATA:
    //   return { ...state };
    case GET_BTC_DATA:
      updateState(state, 'Bitcoin', action.btcData);
      break;
    case GET_ETH_DATA:
      updateState(state, 'eth', action.ethData);
      break;
    case GET_DOG_DATA:
      updateState(state, 'dog', action.dogData);
      break;
    case GET_LTC_DATA:
      updateState(state, 'ltc', action.ltcData);
      break;
    case GET_BCH_DATA:
      updateState(state, 'bch', action.bchData);
      break;
    default:
      return state;
  }
  return state;
};

export default reducer;
