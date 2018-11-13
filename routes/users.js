var express = require('express');
var passport = require('passport');
var router = express.Router();
const usersController = require('../controllers/user_controller');
const auth = require('./auth');
const User = require('../models').User;

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.send('respond with a resource');
});

router.get('/getadmin', usersController.getAdminUsers);

router.get('/getallusers', usersController.getAllUsers);

// router.post('', auth.optional, (req, res, next) => {

// });

router.post('/login', auth.optional, (req, res, next) => {
    console.log(req.body);
    // const { body: { user } } = req.bo;

    if (!req.body.username) {
        return res.status(422).json({
            errors: {
                username: 'is required',
            },
        });
    }

    if (!req.body.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        console.log('AUTHENTICATING');
        if(err) {
            return next(err);
        }

        if(passportUser) {
            console.log('USER FOUND');
            
            const user = passportUser;
            user.token = passportUser.generateJWT();

            return res.json({ user: user.toAuthJSON() });
        }

        console.log('USER NOT FOUND');        
        return res.redirect('/login');
    })(req, res, next);
});

router.get('/current', auth.required, (req, res, next) => {
    console.log('helooo');
    const { payload: { id } } = req;
    return Users.findById(id)
        .then((user) => {
            if(!user) {
                return res.sendStatus(400);
            }

            return res.json({ user: user.toAuthJSON() });
    });    
});  

module.exports = router;