const crypto = require('crypto');

function generateSignature({ version, method, endpoint, payload, key, secret, nonce = new Date().getTime() }) {
  let data = `${nonce}${method}/${version}/${endpoint}/`;
  if (payload) {
    data += JSON.stringify(payload);
  }
  return `Bitso ${key}:${nonce}:${crypto.createHmac('sha256', secret).update(data).digest('hex')}`;
}

module.exports = {
  generateSignature,
};
