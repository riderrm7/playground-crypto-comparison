
const exchangeService = require('../services/exchange-svc');

const routeToBestExchange = async (req, res) => {
    const btcAmount = parseFloat(req.query.amount);

    if (!btcAmount || isNaN(btcAmount)) {
        return res.status(400).json({ error: 'Invalid BTC amount' });
    }

    try {
        const result = await exchangeService.getBtcBestExchange(btcAmount);
        return res.json(result);
    } catch (error) {
        console.log('Error get best exchange:', error)
        return res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = {
    routeToBestExchange,
};
