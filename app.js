const dotenv=require("dotenv").config({path:"./.env"})
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose=require("mongoose")
const passport = require("passport");
const session = require("express-session");
const userModel = require("./models/userModel");
const expressFileUpload=require("express-fileupload")




//* DB CONNECTION
const connectionDB=require("./config/DBConnection").connectionDB()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { log } = require("console");

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// *use express-fileupload
app.use(expressFileUpload())

// *session set before setting the routes for Routers
app.use(session({
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:true
}))
// *initialize passport and use session 
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser())


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
