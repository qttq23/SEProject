var express = require('express');
const userModel = require('../models/user.model');
var router = express.Router();

router.get('/signup', function(req, res) {
    res.render('signup', { layout: false });
})

router.post('/signup', function(req, res) {
    res.render('index');
})

module.exports = router;