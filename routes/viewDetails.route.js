const express = require('express');
const bookModel = require('../models/book.model');

const router = express.Router();

router.get('/:id', async function(req, res) {
    const result = await bookModel.getById(req.params.id);
    console.log(result[0]);
    res.render('viewDetails', {
        book: result[0],
        empty: result.length === 0
    })
})

module.exports = router;