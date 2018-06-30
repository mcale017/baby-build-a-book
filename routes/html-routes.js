var db = require("../models");
var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });

    // Route to get all books on a list using books.handlebars
    app.get("/books", function(req, res) {
        db.Book.findAll({}).then(function(dbBook) {
            res.render("books", dbBook);
        });
    });

    // Route to get a specific book displayed using book.handlebars
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