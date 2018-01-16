const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;
const privateClient = require('./private');

describe('Bitso Private Client Tests', () => {
  const mockApi = {
    get: () => Promise.resolve(),
    post: () => Promise.resolve(),
    delete: () => Promise.resolve(),
  };
  const client = privateClient(mockApi);
  it('Should create an object with "accountStatus", "accountBalance", "bankCodes", "fees", "fundingDestination", "ledger" functions', () => {
    expect(client).to.have.keys('accountStatus', 'accountBalance', 'bankCodes', 'fees', 'fundingDestination', 'ledger');
    expect(client.accountStatus).to.be.a('function');
    expect(client.accountBalance).to.be.a('function');
    expect(client.bankCodes).to.be.a('function');
    expect(client.fees).to.be.a('function');
    expect(client.fundingDestination).to.be.a('function');
  });
  it('"accountStatus", "accountBalance", "bankCodes", "fees", "fundingDestination" functions should return a Promise', () => {
    expect(client.accountStatus()).to.be.a('promise');
    expect(client.accountBalance()).to.be.a('promise');
    expect(client.bankCodes()).to.be.a('promise');
    expect(client.fees()).to.be.a('promise');
    expect(client.fundingDestination()).to.be.a('promise');
  });
  it('"accountStatus" should return a valid payload on successful result', () => {
    const payload = {
      success: true,
      payload: {
        client_id: '1234',
        first_name: 'Claude',
        last_name: 'Shannon',
        status: 'active',
        daily_limit: '5300.00',
        monthly_limit: '32000.00',
        daily_remaining: '3300.00',
        monthly_remaining: '31000.00',
        cellphone_number: 'verified',
        cellphone_number_stored: '+525555555555',
        email_stored: 'shannon@maxentro.py',
        official_id: 'submitted',
        proof_of_residency: 'submitted',
        signed_contract: 'unsubmitted',
        origin_of_funds: 'unsubmitted',
      },
    };
    const tempClient = privateClient(Object.assign({}, mockApi, {
      get: () => Promise.resolve(payload),
    }));
    expect(tempClient.accountStatus()).to.eventually.equal(payload);
  });
});
