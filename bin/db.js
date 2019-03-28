/**
 * Create MySQL connection
 */

/*
var db_config = {
  host     : 'vasilida.beget.tech',
  user     : 'vasilida_182019',
  password : 'Bw%WgLL5',
  database : 'vasilida_182019'
};

function normalizeConnectionDB(val){
  if(val == db_config){
    return val;
  }
  else{
    const url = new URL(val);
    return config = {
      host: url.hostname,
      user: url.username,
      password: url.password,
      database: url.pathname.slice(1), 
    };
  }
}

var mysql = require('mysql');
var connection;


function handleDisconnect() {
  var conf = normalizeConnectionDB(process.env.CLEARDB_DATABASE_URL || db_config)
  connection = mysql.createConnection(conf); // Recreate the connection, since the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect, to avoid a hot loop, and to allow our node script to
    }                                     // process asynchronous requests in the meantime.
    console.log('connected as id ' + connection.threadId);
    // test()
  });                                     
  // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      console.log('connection lost, re-connetion to db');
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}
handleDisconnect();
module.exports = connection;

function test() {
  // console.log(connection);
  var sql = 'SELECT * FROM users';
  connection.query(sql, function(error, result, fields) {
    if(error) throw error;
    console.log(result);
  });
}
*/

/**
 * Create pool to data base
 */

var mysql = require('mysql');
var pool  = mysql.createPool({
  host     : 'vasilida.beget.tech',
  user     : 'vasilida_182019',
  password : 'Bw%WgLL5',
  database : 'vasilida_182019'
});

module.exports = pool;