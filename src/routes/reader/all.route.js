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
        var keyword = req.query.keyword.trim().replace(/\s+/g, ' ');
        console.log(keyword);
        const results = await bookModel.search(keyword);

        res.render('reader/all', {
            books: results,
            empty: results.length === 0,
            success: req.statusCode === 222
        })
    }

})

module.exports = router;