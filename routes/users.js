var express = require('express');
var router = express.Router();

var usersController = require('../controllers/userController');

/* GET users listing. */
router.get('/', usersController.userList);

module.exports = router;
