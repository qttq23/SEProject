var express = require('express');
const userModel = require('../models/user.model');
var router = express.Router();

router.get('/login', async function(req, res) {
    results = await userModel.checkUser("admin1111", "123456");
    console.log(results);
    res.render('login', { layout: false });
})

router.post('/login', function(req, res) {
    res.render('index');
})
module.exports = router;