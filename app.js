var path = require('path');
var createError = require('http-errors');
var logger = require('morgan');

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var sequelize = require('sequelize');
var pg = require('pg');

var passport = require('passport');
var jwt = require('jsonwebtoken');
var localLoginStrategy = require('./passport/local-login');
var LocalStrategy = require('passport-local');
var models = require('./models');
var expressSession = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(expressSession.Store);
var sessionStore = new SequelizeStore({db: models.sequelize, table: 'Session'});

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
// app.use(expressSession({
//     secret: 'keyboard kitty',
//     // resave: false,
//     // saveUninitialized: false,
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // All other routes
app.use('/', indexRouter);
app.use('/users', usersRouter);


///////////////////////
// Session Management
///////////////////////
// https://medium.freecodecamp.org/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e
passport.use(new LocalStrategy(function(username, password, done) {
        models.User.findOne({ where: {username: username} })
            .then((user) => {
                if(!user || !user.validPassword(password)) {
                    return done(null, false, {errors: { 'username or password': 'is invalid'} });
                }

                return done(null, user);
            }).catch(done);
}));

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

// app.post('/api/users/login', passport.authenticate('login', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/login',
//     session: true
// }));

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
