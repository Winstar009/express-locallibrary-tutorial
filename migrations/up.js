'use strict';

var user =	`CREATE TABLE IF NOT EXISTS heroku_9a9e2a34723cf61.user (
				id INT NOT NULL,
				login VARCHAR(45) NOT NULL,
				password VARCHAR(45) NOT NULL,
				create_at TIMESTAMP(10) NOT NULL,
				update_at TIMESTAMP(10) NOT NULL,
				UNIQUE INDEX login_UNIQUE (login ASC) VISIBLE,
				PRIMARY KEY (id))
			ENGINE = InnoDB`;

var user1 =	`CREATE TABLE IF NOT EXISTS heroku_9a9e2a34723cf61.user1 (
				id INT NOT NULL,
				login VARCHAR(45) NOT NULL,
				password VARCHAR(45) NOT NULL,
				create_at TIMESTAMP(10) NOT NULL,
				update_at TIMESTAMP(10) NOT NULL,
				UNIQUE INDEX login_UNIQUE (login ASC) VISIBLE,
				PRIMARY KEY (id))
			ENGINE = InnoDB`;

var shemas = new Array(user, user1);

var up = function(con) {
	shemas.forEach(function(table) {
		con.query(table, function (err, result) {
		if (err) throw err;
			console.log(`Table ${result} created`);
		});
	});
}

module.exports = up;

//mysql://b3a62d5693f6f8:98e637a0@us-cdbr-iron-east-03.cleardb.net/heroku_9a9e2a34723cf61?reconnect=true