var db = require("../models");
var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Book.findAll({}).then(function(dbBook) {
            res.render("index", dbBook);
        });
    });

    app.get("/books/:id", function(req, res) {
        db.Book.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBook) {
            res.render("book", dbBook);
        });
    });
};