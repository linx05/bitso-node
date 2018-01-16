const expect = require('chai').expect;
const BitsoClient = require('./BitsoClient');

describe('Bitso Client Tests', () => {
  const client = BitsoClient();
  it('Should Create a Bitso Client Instance with the correct object properties', () => {
    expect(client).to.have.keys('currencies', 'exchanges', 'public', 'ledgers', 'private');
  });
});
