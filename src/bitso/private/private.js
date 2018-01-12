function PrivateApi(api) {
  const accountStatus = () => {
    return api.get({ url: '/account_status' });
  };

  return {
    accountStatus,
  };
}

module.exports = PrivateApi;
