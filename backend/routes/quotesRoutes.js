const express = require('express');
const {
    createQuote,
    getQuoteById,
    getQuotes,
    deleteQuote,
    updateQuote
} = require('../controllers/quotesControllers');

const router = express.Router();

router.post('/quotes', createQuote);
router.get('/quotes', getQuotes);
router.get('/quotes/:id', getQuoteById);
router.put('/quotes/:id', updateQuote);
router.delete('/quotes/:id', deleteQuote);

module.exports = router;
