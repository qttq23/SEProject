const express = require('express');
const bookModel = require('../models/book.model');
const userModel = require("../models/user.model");
const commentModel = require("../models/comment.model");
const config = require("../configs/userModelConfig.json");

const router = express.Router();

router.get('/:id', async function(req, res) {
    const result = await bookModel.getById(req.params.id);

    if (result.length > 0) {
        var merchantResult = await userModel.getByUsername(result[0].username);
        var commentResult = await commentModel.getByBookId(req.params.id);
    }

    if (result.length === 0) {
        res.render('itemNotFound', { title: "Item not found" });
    } else {
        console.log(commentResult);
        res.render('viewDetails', {
            book: result[0],
            merchant: merchantResult[0],
            empty: result.length === 0,
            title: result[0].title,
            comment: commentResult,
        });
    }


})

module.exports = router;