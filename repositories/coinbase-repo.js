// Repository to fetch Coinbase data

const axios = require('axios');

const CoinbaseHost = 'https://api.coinbase.com';

// Fetch BTC product from Coinbase
const getCbProductPriceOf = async (productId = 'BTC-USD') => {
    try {
        const response = await axios.get(`${CoinbaseHost}/api/v3/brokerage/market/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching Coinbase product ${productId}:`, error);
        return null;
    }
};

module.exports = {
    getCbProductPriceOf,
};
