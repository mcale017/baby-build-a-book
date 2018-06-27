var db = require("../models");

module.exports = function(app) {
    app.get("/api/themes", function(req, res) {
        db.Theme.findAll({}).then(function(dbTheme) {
            res.json(dbTheme);
        });
    });

    app.get("/api/themes/:id", function(req, res) {
        db.Theme.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbTheme) {
            res.json(dbTheme);
        });
    });
};