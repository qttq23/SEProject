var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var express = require("express");
var bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(express.urlencoded({
  extended: true
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

require('./middlewares/session.mdw')(app);
require('./middlewares/local.mdw')(app);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', require('./routes/reader/all.route'));
app.use('/', require('./routes/account.route'));
app.use('/item', require('./routes/viewDetails.route'));

module.exports = app;