import CryptoApis from 'cryptoapis.io';

const apiKey = 'API_KEY';

const caClient = new CryptoApis(apiKey);

// Initial State
const initialState = [
  { name: 'Bitcoin', data: {} },
  { name: 'Ethereum', data: {} },
  { name: 'Doge', data: {} },
  { name: 'LiteCoin', data: {} },
  { name: 'Bitcoin Cash', data: {} },
];
// Action
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
export const gotDOGData = (dogData) => ({
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
export const getDOGData = () => {
  return async (dispatch) => {
    try {
      caClient.BC.DOGE.getSelectedNetwork();
      caClient.BC.DOGE.switchNetwork(caClient.BC.DOGE.NETWORKS.TESTNET);
      let res = await caClient.BC.DOGE.blockchain.getInfo();
      dispatch(gotDOGData(res.payload));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getLTCData = () => {
  return async (dispatch) => {
    try {
      caClient.BC.LTC.getSelectedNetwork();
      caClient.BC.LTC.switchNetwork(caClient.BC.LTC.NETWORKS.TESTNET);
      let res = await caClient.BC.LTC.blockchain.getInfo();
      dispatch(gotLTCData(res.payload));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBCHData = () => {
  return async (dispatch) => {
    try {
      caClient.BC.BCH.getSelectedNetwork();
      caClient.BC.BCH.switchNetwork(caClient.BC.BCH.NETWORKS.TESTNET);
      let res = await caClient.BC.BCH.blockchain.getInfo();
      dispatch(gotBCHData(res.payload));
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
    case GET_BTC_DATA:
      updateState(state, 'Bitcoin', action.btcData);
      break;
    case GET_ETH_DATA:
      updateState(state, 'Ethereum', action.ethData);
      break;
    case GET_DOG_DATA:
      updateState(state, 'Doge', action.dogData);
      break;
    case GET_LTC_DATA:
      updateState(state, 'LiteCoin', action.ltcData);
      break;
    case GET_BCH_DATA:
      updateState(state, 'Bitcoin Cash', action.bchData);
      break;
    default:
      return state;
  }
  return state;
};

export default reducer;
