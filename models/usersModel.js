var db = require('../bin/db');

exports.getUsers = function getUsers() {
	db.getConnection(function(err, connection) {
		if(err) throw err;
		var sql = "SELECT * FROM users";
		connection.query(sql, [], function(err, results) {
			connection.release(); // always put connection back in pool after last query
			if(err) throw err;
			console.log(results);		
		});
	});
}