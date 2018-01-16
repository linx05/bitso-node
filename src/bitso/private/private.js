function PrivateApi(api) {
  const get = (obj) => {
    return api.get(Object.assign({}, obj, { priv: true }));
  };

  const accountStatus = () => {
    return get({ url: '/account_status' });
  };
  const accountBalance = () => {
    return get({ url: '/balance' });
  };
  const bankCodes = () => {
    return get({ url: '/mx_bank_codes' });
  };
  const fees = () => {
    return get({ url: '/fees' });
  };
  const fundingDestination = () => {
    return get({ url: '/funding_destination' });
  };
  const Ledger = ({ ledger, marker, sort, limit } = {}) => {
    const ledgerString = ledger ? `/${ledger}?` : '/?';
    const markerString = marker ? `&marker=${marker}` : '';
    const sortString = sort ? `&sort=${sort}` : '';
    const limitString = limit ? `&limit=${limit}` : '';
    const request = `/ledger/${ledgerString}${markerString}${sortString}${limitString}`;
    return get({ url: request });
  };


  return {
    accountStatus,
    accountBalance,
    bankCodes,
    fees,
    fundingDestination,
    ledger: Ledger,
  };
}

module.exports = PrivateApi;
