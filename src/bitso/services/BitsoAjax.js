const Ajax = require('../../services/ajax');
const { generateSignature } = require('../helpers/signing');

function NeedsSecurityCredentialsError(message) {
  this.name = 'NeedsSecurityCredentialsError';
  this.message = message || 'Private REST API Methods Require a valid Key and Secret.';
}
NeedsSecurityCredentialsError.prototype = Error.prototype;

const BitsoAjax = ({ host, version, key, secret }) => {
  const api = Ajax(host + version);

  const authToken = ({ method, endpoint, payload }) => {
    return generateSignature({ version, method, endpoint, payload, key, secret });
  };

  const getHeaders = (priv, { method, endpoint, payload }) => {
    let additionalHeaders = {};
    if (priv) {
      if (!key || !secret) {
        throw new NeedsSecurityCredentialsError();
      }
      additionalHeaders = Object.assign({}, getHeaders, {
        Authorization: authToken({
          method,
          endpoint,
          payload,
        }),
      });
    }
    return additionalHeaders;
  };

  this.get = ({ url, priv = false, headers = {} }) => {
    const reqHeaders = Object.assign({}, getHeaders(priv, {
      method: 'GET',
      version,
      endpoint: url,
    }), headers);
    return api.get(url, reqHeaders);
  };

  this.post = ({ url, data, priv = false, headers = {} }) => {
    const reqHeaders = Object.assign({}, getHeaders(priv, {
      method: 'POST',
      endpoint: url,
      payload: data,
    }), headers);
    return api.post(url, data, reqHeaders);
  };

  this.put = ({ url, data, priv = false, headers = {} }) => {
    const reqHeaders = Object.assign({}, getHeaders(priv, {
      method: 'PUT',
      endpoint: url,
      payload: data,
    }), headers);
    return api.put(url, data, reqHeaders);
  };

  this.delete = ({ url, priv = false, headers = {} }) => {
    const reqHeaders = Object.assign({}, getHeaders(priv, {
      method: 'DELETE',
      endpoint: url,
    }), headers);
    return api.delete(url, reqHeaders);
  };

  return this;
};

module.exports = BitsoAjax;
