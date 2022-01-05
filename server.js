const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');
const apiRouter = require('./routers/quoteapi.js');

const PORT = process.env.PORT || 4001;

app.use('/api/quotes', apiRouter)




app.use(express.static('public'));

//app.get('/', (req, res, next) => {});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });