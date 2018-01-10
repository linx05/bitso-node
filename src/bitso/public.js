function PublicApi(api) {
  const availableBooks = () => {
    return api.get({ url: '/available_books' });
  };
  const orderBook = (book, { aggregate } = {}) => {
    const aggregateString = aggregate ? `&aggregate${aggregate}` : '';
    return api.get({ url: `/order_book/?book=${book}${aggregateString}` });
  };
  const ticker = (book) => {
    return api.get({ url: `/ticker/?book=${book}` });
  };
  const trades = (book, { marker, sort, limit } = {}) => {
    const markerString = marker ? `&marker=${marker}` : '';
    const sortString = sort ? `&sort=${sort}` : '';
    const limitString = sort ? `&sort=${limit}` : '';
    const request = `/trades/?book=${book}${markerString}${sortString}${limitString}`;
    return api.get({ url: request });
  };
  return {
    availableBooks,
    orderBook,
    ticker,
    trades,
  };
}

module.exports = PublicApi;
