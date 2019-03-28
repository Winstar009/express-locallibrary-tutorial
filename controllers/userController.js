var user = require('../models/usersModel');

exports.userList = function(req, res) {
	console.log(user.getUsers());
	res.send('NOT IMPLEMENTED: Site Home Page');
};