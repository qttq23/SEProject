const express = require('express');
const bookModel = require('../models/book.model');

const router = express.Router();

router.get('/', async function(req, res) {
    const results = await bookModel.all();
    res.render('index', {
        title: "Homepage",
        books: results,
        empty: results.length === 0
    })
})

module.exports = router;