var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Book.findAll({}).then(function(dbBook) {
            res.render("index", dbBook);
        });
    });

    app.get("/babybooks/:id", function(req, res) {
        db.Book.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBook) {
            res.render("book", dbBook);
        });
    });
};