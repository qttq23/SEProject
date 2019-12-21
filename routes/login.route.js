var express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
var router = express.Router();

router.get('/login', function(req, res) {
    res.render('login', { layout: false });
})

router.post('/login', async function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    const user = await userModel.singleByUserName(req.body.username);
    if (user === null)
      return res.render('login', {
        layout: false,
        err_message: 'Invalid username or password.'
      });
    const rs = bcrypt.compareSync(req.body.password, user.password);
    if (rs === false)
    return res.render('login', {
      layout: false,
      err_message: 'Invalid username or password.'
    });

    delete user.password;
    req.session.isAuthenticated = true;
    req.session.authUser = user;
    req.session.touch(); 
    const url = req.query.retUrl || '/';
    console.log(url);
    res.redirect(url);
  })
  
  router.post('/logout', async function (req, res) {
    req.session.isAuthenticated = false;
    req.session.authUser = null;
    res.redirect(req.headers.referer);
  })

router.get('/login/checkuser', async function (req, res) {
    const user = await userModel.checkAccountValidated(req.query.user, req.query.password);

    if (user)
        return res.json(true);

    res.json(false);
  })

module.exports = router;