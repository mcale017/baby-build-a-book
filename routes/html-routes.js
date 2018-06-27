var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.BabyBook.findAll({}).then(function(dbBabyBook) {
            res.render("index", dbBabyBook);
        });
    });

    app.get("/babybooks/:id", function(req, res) {
        db.BabyBook.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBabyBook) {
            res.render("babybook", dbBabyBook);
        });
    });
};