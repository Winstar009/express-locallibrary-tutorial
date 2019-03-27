/**
 * Create MySQL connection
 */

var mysql = require('mysql');
var standardConnectin = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Ws031hrt',
  // insecureAuth : true
});

var connection = normalizeConnectionDB(process.env.CLEARDB_DATABASE_URL || standardConnectin)

function normalizeConnectionDB(val){
  if(val == standardConnectin){
    return val;
  }
  else{
    const url = new URL(val);
    return mysql.createConnection({
      host: url.hostname,
      user: url.username,
      password: url.password,
      database: url.pathname.slice(1), 
    });
  }
}


connection.connect(function(err) {
  console.log('try connection database');
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  else{
    var up = require('../migrations/up');
    up(connection);
    console.log('connected as id ' + connection.threadId);
  }
});

// connection.end();

module.exports = connection;