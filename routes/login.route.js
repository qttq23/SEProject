var express = require('express');
const bookModel = require('../models/book.model');
var router = express.Router();

router.get('/login', function(req, res) {
    res.render('login', { layout: false });
})

module.exports = router;