const Ajax = require('./services/BitsoAjax');
const PublicApi = require('./public/index');
const constants = require('./helpers/const');

const BitsoClient = ({
  key,
  secret,
  host = 'https://api.bitso.com/',
  version = 'v3',
} = {}, test = false) => {
  if (test) {
    host = 'https://api-dev.bitso.com/'; // eslint-disable-line no-param-reassign
  }
  const api = Ajax({ host, version, key, secret });
  return {
    ...constants,
    public: PublicApi(api),
  };
};

module.exports = BitsoClient;
