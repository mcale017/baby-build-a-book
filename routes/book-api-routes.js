var db = require("../models");

module.exports = function(app) {
    app.get("/api/books", function(req, res) {
        db.Book.findAll({}).then(function(dbBook) {
            res.json(dbBook);
        });
    });

    app.get("/api/books/:id", function(req, res) {
        db.Book.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBook) {
            res.json(dbBook);
        });
    });

    app.post("/api/books", function(req, res) {
        db.Book.create(req.body).then(function(dbBook) {
            res.json(dbBook);
        });
    });

    app.delete("/api/books/:id", function(req, res) {
        db.Book.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBook) {
            res.json(dbBook);
        });
    });
};