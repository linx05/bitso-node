const fetch = require('node-fetch');

const ApiService = (api) => {
  this.httpExecute = (urlResource, method, data = null, additionalHeaders = {}) => {
    return fetch(api + urlResource, Object.assign({
      method,
      data,
    }, additionalHeaders))
      .then(res => res.json())
      .catch(this.requestFailed);
  };

  this.get = (url, additionalHeaders) => {
    return this.httpExecute(url, 'GET', null, additionalHeaders);
  };

  this.post = (url, data, additionalHeaders) => {
    return this.httpExecute(url, 'POST', data, additionalHeaders);
  };

  this.put = (url, data, additionalHeaders) => {
    return this.httpExecute(url, 'PUT', data, additionalHeaders);
  };

  this.delete = (url, additionalHeaders) => {
    return this.httpExecute(url, 'DELETE', null, additionalHeaders);
  };

  this.requestFailed = (error) => {
    return Promise.reject(error);
  };
  return this;
};

module.exports = ApiService;
