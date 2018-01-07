const Ajax = require('../services/BitsoAjax');

const BitsoClient = ({
  key,
  secret,
  host = 'https://api.bitso.com/',
  version = 'v3',
} = {}) => {
  const api = Ajax({ host, version, key, secret });

  this.availableBooks = () => {
    return api.get({ url: '/available_books' })
      .then((res) => {
        return res;
      });
  };
  return this;
};

module.exports = BitsoClient;
