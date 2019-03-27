'use strict';

var user =	`CREATE TABLE IF NOT EXISTS tasks (
				id INT NOT NULL,
				login VARCHAR NOT NULL,
				password VARCHAR NOT NULL,
				created_at DATATIME NOT NULL DEFAULT CURRENT_TIMESTAMP
				update_at DATATIME NOT NULL DEFAULT CURRENT_TIMESTAMP
			)`;

var tasks =	`CREATE TABLE IF NOT EXISTS tasks (
				id int(11) NOT NULL,
				task varchar(200) NOT NULL,
				status tinyint(1) NOT NULL DEFAULT 1,
				created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
			)`;

var shemas = new Array(user, tasks);

var up = function(con) {
	shemas.forEach(function(table) {
		con.query(sql, function (err, result) {
		if (err) throw err;
			console.log(`Table ${table} created`);
		});
	});
}

module.exports = up;