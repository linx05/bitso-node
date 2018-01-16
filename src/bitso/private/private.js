function PrivateApi(api) {
  const get = (obj) => {
    return api.get(Object.assign({}, obj, { priv: true }));
  };
  const separateOperationItems = (items) => {
    const itemsArray = Array.isArray(items) ? [...items] : [items];
    let itemsString;
    if (items) {
      itemsString = itemsArray.join('-');
    }
    return itemsString;
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
  const fundings = ({ fid, limit } = {}) => {
    const fidString = separateOperationItems(fid);
    const limitString = limit ? `?limit=${limit}` : '';
    return get({ url: `/fundings/${fidString}${limitString}` });
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
  const lookupOrders = ({ oid }) => {
    const oidString = separateOperationItems(oid);
    return get({ url: `/orders/${oidString}` });
  };
  const openOrders = ({ book, marker, sort, limit } = {}) => {
    const bookString = book ? `/${book}?` : '/?';
    const markerString = marker ? `&marker=${marker}` : '';
    const sortString = sort ? `&sort=${sort}` : '';
    const limitString = limit ? `&limit=${limit}` : '';
    const request = `/open_orders/${bookString}${markerString}${sortString}${limitString}`;
    return get({ url: request });
  };
  const orderTrades = ({ oid } = {}) => {
    const oidString = separateOperationItems(oid);
    return get({ url: `/order_trades/${oidString}` });
  };
  const userTrades = ({ tid, marker, sort, limit } = {}) => {
    const tidString = separateOperationItems(tid);
    const markerString = marker ? `&marker=${marker}` : '';
    const sortString = sort ? `&sort=${sort}` : '';
    const limitString = limit ? `&limit=${limit}` : '';
    const request = `/user_trades/${tidString}/?${markerString}${sortString}${limitString}`;
    return get({ url: request });
  };
  const withdrawals = ({ wid, limit } = {}) => {
    const widString = separateOperationItems(wid);
    const limitString = limit ? `?limit=${limit}` : '';
    return get({ url: `/withdrawals/${widString}${limitString}` });
  };

  return {
    accountStatus,
    accountBalance,
    bankCodes,
    fees,
    fundings,
    fundingDestination,
    ledger: Ledger,
    lookupOrders,
    openOrders,
    orderTrades,
    userTrades,
    withdrawals,
  };
}

module.exports = PrivateApi;
