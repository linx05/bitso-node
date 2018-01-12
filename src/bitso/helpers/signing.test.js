const expect = require('chai').expect;
const { generateSignature } = require('./signing');

describe('Authentication Signature Tests', () => {
  const key = '1234567890';
  const secret = '0ysRO2hUvpWBXDAcIq77F1ZG5IqUQjAP';
  const version = 'v3';
  const method = 'GET';
  const endpoint = 'account_status';
  const nonce = 200;
  it('Should generate a valid authorization string with valid API Key and Secret.', () => {
    const signature = '74664f59562d41455d59d277fdad9c2bef28f78c3c8b58be2ed4a10276c39383';
    const expectedResult = `Bitso ${key}:${nonce}:${signature}`;
    expect(generateSignature({ key, secret, version, method, endpoint, nonce })).to.equal(expectedResult);
  });
  it('Should generate a valid authorization string given a valid JSON payload', () => {
    const signature = 'fdc517ab00d42a7fca23b832386aee82f8c448c637d99895914c507ecbc8f6e8';
    const expectedResult = `Bitso ${key}:${nonce}:${signature}`;
    const payload = {
      first_name: 'Test',
      last_name: 'User',
    };
    expect(generateSignature({ key, secret, version, method, endpoint, nonce, payload })).to.equal(expectedResult);
  });
});

