# Bitso-Node-API

`npm install bitso-node-api`

A Node.js API Wrapper for the [Bitso REST API](https://bitso.com/api_info). Please refer to [their documentation](https://bitso.com/api_info) for the responses and parameters.

```javascript
var BitsoNode = require('bitso-node-api');
// Key and Secret are only necessary if you use the Private REST API
var bitsoClient = BitsoNode.BitsoClient({ 
  key: '1234',
  secret: 'secret',
 });

bitsoClient
  .public
  .availableBooks()
  .then(books => {
    console.log(books.prices);
  });

```

##How to Use

```javascript
const BitsoNode = require('bitso-node-api');

const client = BitsoNode.BitsoClient({
  key: "KEY",
  secret: "SECRET",
});

// Public API
client.public.ticker({
  book: BitsoNode.exchanges.BTC_MXN
})
  .then(res => console.log(res))
  .catch(err => console.log(err));
  
// Private API
client.private.accountStatus()
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

To use private API methods that move any currency or change account
information you need to create the API client with the `authorizeMovements` parameter ser to true.

(REMEMBER TO USE AT YOUR OWN RISK!)
```javascript
const BitsoNode = require('bitso-node-api');

const client = BitsoNode.BitsoClient({
  key: "KEY",
  secret: "SECRET",
  authorizeMovements: true
});

client.private.placeOrder({
  book: BitsoNode.exchanges.BTC_MXN,
  side: 'buy',
  type: 'market',
  minor: '10000',
})
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

# License

The MIT License (MIT)

Copyright (c) 2017 César Laredo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.