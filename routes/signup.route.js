var express = require('express');
const bookModel = require('../models/book.model');
var router = express.Router();

router.get('/signup', function(req, res) {
    res.render('signup', { layout: false });
})

module.exports = router;