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


  return {
    accountStatus,
    accountBalance,
    bankCodes,
    fees,
    fundingDestination,
  };
}

module.exports = PrivateApi;
