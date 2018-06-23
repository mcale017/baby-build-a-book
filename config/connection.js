// Set up MySQL connection.
var mysql = require("mysql");

var connection;

// If JAWSDB_URL can be accessed, create a connection to it.
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Otherwise, create a connection to the local database.
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123abc',
        database: 'books_db'
    });
};

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;