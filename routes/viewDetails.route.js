const express = require('express');
const bookModel = require('../models/book.model');

const router = express.Router();

router.get('/:id', async function(req, res) {
    const result = await bookModel.getById(req.params.id);

    if (result.length === 0) {
        res.render('itemNotFound', { title: "Item not found" });
    } else {
        res.render('viewDetails', {
            book: result[0],
            empty: result.length === 0,
            title: result[0].title,
        });
    }


})

module.exports = router;