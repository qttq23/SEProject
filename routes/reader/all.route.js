const express = require('express');
const bookModel = require('../../models/book.model');

const router = express.Router();

router.get('/all', async function(req, res) {
    const results = await bookModel.all();
    res.render('reader/all', {
        books: results,
        empty: results.length === 0
    })
})

module.exports = router;