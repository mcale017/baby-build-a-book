// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var book = {
  selectAll: function(cb) {
    orm.selectAll("books", function(res) {
      cb(res);
    });
  },
  selectOne: function(condition, cb) {
    orm.selectOne("books", condition, function(res) {
        cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("books", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = book;
