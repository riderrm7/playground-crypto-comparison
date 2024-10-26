// Repository to fetch Coinbase data

const axios = require('axios');

const BinanceHost = 'https://api.binance.com';

// Fetch BTC prices from Binance
const getBnSymbolPriceOf = async (symbol = 'BTCUSDT') => {
    try {
        const response = await axios.get(`${BinanceHost}/api/v3/ticker/price?symbol=${symbol}`);

        return response.data;
    } catch (error) {
        console.error(`Error fetching Binance symbol ${symbol}:`, error);
        return null;
    }
};

module.exports = {
    getBnSymbolPriceOf,
};