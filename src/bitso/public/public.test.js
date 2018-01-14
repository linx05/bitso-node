const expect = require('chai').expect;
const publicClient = require('./public');

describe('Bitso Public Client Tests', () => {
  const mockApi = {
    get: () => Promise.resolve(),
  };
  const client = publicClient(mockApi);

  it('Should create an object with "availableBooks", "orderBook", "ticker", "trades" functions', () => {
    expect(client).to.have.keys('availableBooks', 'orderBook', 'ticker', 'trades');
    expect(client.availableBooks).to.be.a('function');
    expect(client.orderBook).to.be.a('function');
    expect(client.ticker).to.be.a('function');
    expect(client.trades).to.be.a('function');
  });

  it('"availableBooks", "orderBook", "ticker", "trades" functions should return a Promise', () => {
    expect(client.availableBooks()).to.be.a('promise');
    expect(client.orderBook({})).to.be.a('promise');
    expect(client.ticker({})).to.be.a('promise');
    expect(client.trades({})).to.be.a('promise');
  });
});
