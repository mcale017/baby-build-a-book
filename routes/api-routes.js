var db = require("../models");

module.exports = function(app) {
    app.get("/api/babybooks", function(req, res) {
        db.BabyBook.findAll({}).then(function(dbBabyBook) {
            res.json(dbBabyBook);
        });
    });

    app.get("/api/babybooks/:id", function(req, res) {
        db.BabyBook.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBabyBook) {
            res.json(dbBabyBook);
        });
    });

    app.post("/api/babybooks", function(req, res) {
        db.BabyBook.create(req.body).then(function(dbBabyBook) {
            res.json(dbBabyBook);
        });
    });

    app.delete("/api/babybooks/:id", function(req, res) {
        db.BabyBook.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBabyBook) {
            res.json(dbBabyBook);
        });
    });
};