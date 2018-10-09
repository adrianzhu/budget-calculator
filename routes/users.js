var express = require('express');
var router = express.Router();
const usersController = require('../controllers/user_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.send('respond with a resource');
});

router.get('/allusers', usersController.getAllUsers);

module.exports = router;