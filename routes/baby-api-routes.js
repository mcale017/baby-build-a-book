var db = require("../models");

module.exports = function(app) {
    app.get("/api/babies", function(req, res) {
        db.Baby.findAll({}).then(function(dbBaby) {
            res.json(dbBaby);
        });
    });

    app.get("/api/babies/:id", function(req, res) {
        db.Baby.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBaby) {
            res.json(dbBaby);
        });
    });

    app.post("/api/babies", function(req, res) {
        db.Baby.create(req.body).then(function(dbBaby) {
            res.json(dbBaby);
        });
    });

    app.delete("/api/babies/:id", function(req, res) {
        db.Baby.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBaby) {
            res.json(dbBaby);
        });
    });
};