# Cryptocurrency Exchange API

This is a simple Node.js API that provides the best exchange for purchasing Bitcoin (BTC) between Binance and Coinbase. The API compares prices from both exchanges and returns the option that minimizes the amount of USD or USDT spent.


## Technologies Used

- Node.js
- Express
- Axios
- JavaScript


### Quick start
Install dependencies:
```sh
npm i
```

To start the app:
```sh
npm run start
```

#### Returns the amount cheaper

- **URL**: `exchange-routing?amount={btc_amount}`
- **Method**: `GET`
- **Description**: Returns the amount cheaper
- **Response**:
  ```json
    {
        "btcAmount": 20,
        "usdAmount": 1268916.4,
        "exchange": "coinbase"
    }
  ```
