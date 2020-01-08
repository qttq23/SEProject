var express = require("express");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const config = require("../configs/userModelConfig.json");
var router = express.Router();

router.get("/signup", function(req, res) {
  res.render("signup", { layout: false });
});

router.post("/signup", async function(req, res) {
  var username = req.body.username;
  const user = await userModel.singleByUserName(req.body.username);
  if (user !== null) {
    return res.render("signup", {
      layout: false,
      err_message: "Username is existed."
    });
  }
  const emailCheck = await userModel.checkEmailValidated(req.body.email);
  if (emailCheck !== null) {
    return res.render("signup", {
      layout: false,
      err_message: "Email is existed."
    });
  }

  const hash = bcrypt.hashSync(
    req.body.password,
    config.authentication.saltRounds
  );
  const entity = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    username: req.body.username,
    password: hash
  };
  const ret = await userModel.add(entity);
  res.render("index");
});

router.get("/signup/is-available", async function(req, res) {
  const user = await userModel.singleByUserName(req.query.user);
  if (!user) return res.json(true);

  res.json(false);
});

router.get("/login", function(req, res) {
  res.render("login", { layout: false });
});

router.post("/login", async function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  const user = await userModel.singleByUserName(req.body.username);
  if (user === null)
    return res.render("login", {
      layout: false,
      err_message: "Invalid username or password."
    });
  const rs = bcrypt.compareSync(req.body.password, user.password);
  if (rs === false)
    return res.render("login", {
      layout: false,
      err_message: "Invalid username or password."
    });

  delete user.password;
  req.session.isAuthenticated = true;
  req.session.authUser = user;
  req.session.touch();
  const url = req.query.retUrl || "/";
  console.log(url);

  req.session.save(function(err) {
    if (err) {
      return;
    }
    res.redirect(url);
  });
});

router.post("/logout", async function(req, res) {
  req.session.isAuthenticated = false;
  req.session.authUser = null;
  req.session.save(function(err) {
    if (err) {
      return;
    }
    res.redirect(req.get("referer"));
  });
});

router.get("/login/checkuser", async function(req, res) {
  const user = await userModel.checkAccountValidated(
    req.query.user,
    req.query.password
  );

  if (user) return res.json(true);

  res.json(false);
});

router.get("/profile", function(req, res) {
  const user = req.session.authUser;
  let isReader = false;
  let isMerchant = false;
  let isAdmin = false;
  if (user.type === 0) {
    isReader = true;
  } else if (user.type === 1) {
    isMerchant = true;
  } else if (user.type === 2) {
    isAdmin = true;
  }
  res.render("profile", {
    user: user,
    isReader: isReader,
    isMerchant: isMerchant,
    isAdmin: isAdmin
  });
});

router.get("/profile/changeProfile", function(req, res) {
  const user = req.session.authUser;
  res.render("changeProfile", {
    user: user
  });
});

module.exports = router;
