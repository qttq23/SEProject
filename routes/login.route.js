var express = require('express');
const userModel = require('../models/user.model');
var router = express.Router();

router.get('/login', function(req, res) {
    res.render('login', { layout: false });
})

router.post('/login', async function(req, res) {
    const password = req.body.password;
    const username = req.body.username;
    console.log(username);
    console.log(password);
    const results = await userModel.checkAccountValidated(username, password);

    console.log(results);
    if (results.length === 0) {
        console.log("no");
    } else {
        console.log("validated");
        res.render("index");
    }

})

module.exports = router;