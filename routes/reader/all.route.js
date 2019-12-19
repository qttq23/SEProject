const express = require('express');
const bookModel = require('../../models/book.model');

const router = express.Router();

router.get('/all', async function(req, res) {
    if (req.query.keyword === "" || !req.query.keyword) {
        const results = await bookModel.all();
        res.render('reader/all', {
            books: results,
            empty: results.length === 0
        })
    } else {
        const results = await bookModel.search(req.query.keyword);

        res.render('reader/all', {
            books: results,
            empty: results.length === 0
        })
    }

})

module.exports = router;