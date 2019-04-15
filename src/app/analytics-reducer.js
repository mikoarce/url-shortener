export const types = {
  FETCH_URL_INFO: 'ANALYTICS/FETCH_URL_INFO',
};

export const actions = {
  fetchUrlInfo: url => ({ types: types.FETCH_URL_INFO, url }),
};

const defaultState = {
  url: '',
  info: [],
};

const fetchUrlInfo = (state, url) => {
  // TODO: Call actual URL shortener API here.
  const info = [
    { ip: '111.111.111.1', os: 'macOs', date: '1970-01-01T00:00:00.000Z' },
    { ip: '222.222.222.2', os: 'Ubuntu', date: '2019-05-10T01:02:03.000Z' },
  ];
  return Object.assign({}, state, { url, info });
};

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case types.FETCH_URL_INFO:
      return fetchUrlInfo(state, action.url);
    default:
      return state;
  }
};

export default reducer;
