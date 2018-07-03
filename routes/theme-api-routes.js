var db = require("../models");

module.exports = function(app) {
    app.get("/api/themes", function(req, res) {
        db.Theme.findAll({}).then(function(dbTheme) {
            res.json(dbTheme);
        });
    });

    // Route for being able to create dummy data into themes table
    app.get("/api/themes/seeds", function(req, res) {
        db.Theme.sync({force: true}).then(function() {
            db.Theme.bulkCreate([
                {name: "rainforest", title: 'just a title', page1: 'just page 1', page2: 'page 2', page3: 'page 3', page4: 'page 4', page5: 'page 5', page6: 'page 6'}
            ]).then(() => {
                return db.Theme.findAll();
            }).then(themes => {
                res.json(themes);
            });
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