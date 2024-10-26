const binanceRepo = require('../repositories/binance-repo');
const coinbaseRepo = require('../repositories/coinbase-repo');

// Compare prices of BTC and return the best exchange
const getBtcBestExchange = async (btcAmount) => {
    const bnSymbol = await binanceRepo.getBnSymbolPriceOf('BTCUSDT');
    const cbProduct = await coinbaseRepo.getCbProductPriceOf('BTC-USDT')

    if (!bnSymbol || !cbProduct) {
        console.error(`Error getBtcBestExchange bnSymbol=${bnSymbol}, cbProduct=${cbProduct}`)
        throw new Error('Error fetching product or symbol');
    }

    const binanceTotal = parseFloat(bnSymbol.price) * btcAmount;
    const coinbaseTotal = parseFloat(cbProduct.price) * btcAmount;

    const bestExchange = binanceTotal < coinbaseTotal ? 'binance' : 'coinbase';
    const bestPrice = Math.min(binanceTotal, coinbaseTotal);

    return {
        btcAmount,
        usdAmount: bestPrice,
        exchange: bestExchange,
    };
};

module.exports = {
    getBtcBestExchange,
};
