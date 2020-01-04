const express = require('express');
const bookModel = require('../models/book.model');
const userModel = require("../models/user.model");
const commentModel = require("../models/comment.model");
const config = require("../configs/userModelConfig.json");
var moment = require('moment');

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
            id: req.params.id,
        });
    }


});
router.post('/:id/post_comment', async function(req, res) {
    if (req.session.authUser === null || req.session.authUser === undefined) {

        res.status(404) // HTTP status 404: NotFound
            .render('empty', { message: 'Login as a merchant to upload' });
        return;
    }

    var nowDate = Date.now();
    //Init the params here
    var comment = {
        "username": req.session.authUser.username,
        "book_id": req.params.id,
        "date_time": moment(nowDate).format('YYYY-MM-DD hh:mm:ss'),
        "content": req.body.commentarea,
        "rating": req.body.rating,
        "comment_title": req.body.commenttitle,
    }

    if (await commentModel.add(comment)) {
        res.redirect(`/item/${req.params.id}`);
    }
});

module.exports = router;