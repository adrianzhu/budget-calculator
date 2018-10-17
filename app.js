var path = require('path');
var createError = require('http-errors');
var logger = require('morgan');

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var sequelize = require('sequelize');
var pg = require('pg');

var passport = require('passport');
var localLoginStrategy = require('./passport/local-login');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var models = require('./models');
// var config = require('./config.js'); // think it is replaced by config.json in index.js

///////////////////////
// App Configuration
///////////////////////
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

// // All other routes
app.use('/', indexRouter);
app.use('/users', usersRouter);


///////////////////////
// Session Management
///////////////////////
passport.use('login', localLoginStrategy);
passport.serializeUser(function(user, done) {
    return done(null, user.id);
});
passport.deserializeUser(function(userId, done) {
    models.User.findById(userId).then(function (user) {
        if (!user)
            return done(null, false);

        return done(null, user);
    })
});

app.post('/api/users/login', passport.authenticate('login', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    session: true
}));

// app.post('/api/users/login', function(request, response) {
//     console.log('hello');
// });

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
