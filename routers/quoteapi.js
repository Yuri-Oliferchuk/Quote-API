const express = require ('express');
const quotesData = require('../data.js');
const {getRandomElement} = require('../utils.js');

quoteApiRouter = express.Router();

//Send quotes to browser
quoteApiRouter.get('/', (req, res) => {
    if (req.query.person) {
        let autorName = req.query.person;
        let newData = {quotes:{}};
        newData.quotes = quotesData.quotes.filter(c => c.person === autorName);
        res.send(newData);
    } else {
       res.status(200).json(quotesData);
    }
})

//Send random quote
quoteApiRouter.get('/random', (req, res) => {
    const quoteRandom = {quote:{}};
    quoteRandom.quote = getRandomElement(quotesData.quotes);
    res.status(200).json(quoteRandom);
})

//Add new quote to database
quoteApiRouter.post('/', (req, res) => {
    if (req.query.person&&req.query.quote) {
        let newQuote = {quote:{quote:'', person:''}};
        newQuote.quote.quote = req.query.quote;
        newQuote.quote.person = req.query.person;
        quotesData.quotes.push(newQuote.quote);
        res.status(200).send(newQuote);
    } else {
        res.status(400).send();
    }
})

module.exports = quoteApiRouter;