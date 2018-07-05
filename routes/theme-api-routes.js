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
                {
                    name: "beach",
                    title: "name's Day at the Beach",
                    page1: "It was a bright, sunny summer day when name went to visit the beach with their parents and best friend, friend.",
                    page2: "name loved going to the beach and activity in the water and wave at the fish    swimming by. Often they would name the fish after friend.",
                    page3: "Today, name was looking for a very special shell. This shell would allow them to hear the ocean, even when they returned back home to the big city! Can you guess what kind of shell this is?",
                    page4: "name asked friend if friend could help name find the special shell.",
                    page5: "just page 5",
                    page6: "just page 6"
                }
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