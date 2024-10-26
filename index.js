const express = require('express');

const exchangeHandler = require('./handlers/exchange-hdlr');

const app = express();
const PORT = 4000;


app.get('/exchange-routing', exchangeHandler.routeToBestExchange);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
