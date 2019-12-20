var express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
const config = require('../configs/userModelConfig.json');
var router = express.Router();

router.get('/signup', function(req, res) {
    res.render('signup', { layout: false });
})

router.post('/signup', async function(req, res) {
    const hash = bcrypt.hashSync(req.body.password, config.authentication.saltRounds);
    const entity = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        username: req.body.username,
        password: hash
    }
    const ret = await userModel.add(entity);
    res.render('index');
})

router.get('/signup/is-available', async function (req, res) {
    const user = await userModel.singleByUserName(req.query.user);
    if (!user)
      return res.json(true);
  
    res.json(false);
  })

module.exports = router;