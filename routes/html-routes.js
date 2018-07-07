var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", { css: ['bootstrap.min.css', 'index.css'], js: ['theme.js', 'index.js', 'scrolling-nav.js'] });
    });

    // Route to get all books on a list using books.handlebars
    app.get("/books", function(req, res) {
        db.Book.findAll({}).then(function(dbBook) {
            res.render("books", { css: ['bootstrap.min.css', 'books.css'], js: ['scrolling-nav.js'], bookObject: dbBook });
        });
    });

    // Route to get a specific book displayed using book.handlebars
    app.get("/books/:id", function(req, res) {
        db.Book.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBook) {
            res.render("book", { css: ['bootstrap.min.css', 'book.css'], js: ['book.js', 'scrolling-nav.js'], bookObject: dbBook });
        });
    });
};