export const types = {
  FETCH_URL_INFO: 'ANALYTICS/FETCH_URL_INFO',
  CLEAR_URL: 'ANALYTICS/CLEAR_URL',
};

export const actions = {
  fetchUrlInfo: url => ({ type: types.FETCH_URL_INFO, url }),
  clearUrl: () => ({ type: types.CLEAR_URL }),
};

const defaultState = {
  url: '',
  info: [],
};

const fetchUrlInfo = (state, url) => {
  // TODO: Call actual URL shortener API here.
  const info = [
    { ip: '111.111.111.1', os: 'macOs 10.14', date: (new Date('2018-04-22T00:00:00.000Z')).toUTCString() },
    { ip: '222.222.222.2', os: 'Ubuntu 18.04 LTS', date: (new Date('2019-05-10T01:02:03.000Z')).toUTCString() },
    { ip: '333.333.333.3', os: 'Windows 10', date: (new Date('2018-12-12T11:11:11.000Z')).toUTCString() },
    { ip: undefined, os: undefined, date: undefined },
  ];
  return Object.assign({}, state, { url, info });
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_URL_INFO:
      return fetchUrlInfo(state, action.url);
    case types.CLEAR_URL:
      return defaultState;
    default:
      return state;
  }
};

export default reducer;
