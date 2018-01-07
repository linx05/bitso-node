const expect = require('chai').expect;
const BitsoClient = require('./BitsoClient');

describe('Bitso Client Tests', () => {
  it('Should Create a Bitso Client Instance with the Correct Object', () => {
    const client = BitsoClient();
    client.availableBooks('xrp_mxn')
    expect(client).to.have.keys('availableBooks');
  });
});
