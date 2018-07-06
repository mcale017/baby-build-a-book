var db = require("../models");

module.exports = function (app) {
    app.get("/api/books", function (req, res) {
        db.Book.findAll({}).then(function (dbBook) {
            res.json(dbBook);
        });
    });

    1
    app.get("/api/books/seeds", function (req, res) {
        db.Book.sync({ force: true }).then(function () {
            db.Book.bulkCreate([
                { title: 'mock title', avatar: "hello", theme: "rainforest", page1: 'page 1', page2: 'page 2', page3: 'page 3', page4: 'page 4', page5: 'page 5', page6: 'page 6' }
            ]).then(() => {
                return db.Book.findAll();
            }).then(books => {
                res.json(books);
            });
        });
    });

    app.get("/api/books/:id", function (req, res) {
        db.Book.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbBook) {
            res.json(dbBook);
        });
    });

    app.post("/api/books", function (req, res) {
        db.Theme.findOne({
            where: {
                name: req.body.theme
            }
        }).then(function(dbTheme) {
            var newBook = {
                title: dbTheme.title.replace("myName", req.body.name),
                avatar: "irrelevant for now",
                theme: dbTheme.name,
                page1: dbTheme.page1.replace("myName", req.body.name).replace("myBff", req.body.bff).replace("myAnimal", req.body.animal).replace("myCharacter", req.body.character).replace("myColor", req.body.color).replace("myFood", req.body.food).replace("myActivity", req.body.activity),
                page2: dbTheme.page2.replace("myName", req.body.name).replace("myBff", req.body.bff).replace("myAnimal", req.body.animal).replace("myCharacter", req.body.character).replace("myColor", req.body.color).replace("myFood", req.body.food).replace("myActivity", req.body.activity),
                page3: dbTheme.page3.replace("myName", req.body.name).replace("myBff", req.body.bff).replace("myAnimal", req.body.animal).replace("myCharacter", req.body.character).replace("myColor", req.body.color).replace("myFood", req.body.food).replace("myActivity", req.body.activity),
                page4: dbTheme.page4.replace("myName", req.body.name).replace("myBff", req.body.bff).replace("myAnimal", req.body.animal).replace("myCharacter", req.body.character).replace("myColor", req.body.color).replace("myFood", req.body.food).replace("myActivity", req.body.activity),
                page5: dbTheme.page5.replace("myName", req.body.name).replace("myBff", req.body.bff).replace("myAnimal", req.body.animal).replace("myCharacter", req.body.character).replace("myColor", req.body.color).replace("myFood", req.body.food).replace("myActivity", req.body.activity),
                page6: dbTheme.page6.replace("myName", req.body.name).replace("myBff", req.body.bff).replace("myAnimal", req.body.animal).replace("myCharacter", req.body.character).replace("myColor", req.body.color).replace("myFood", req.body.food).replace("myActivity", req.body.activity)
            };

            db.Book.create(newBook).then(function(dbBook) {
                res.json(dbBook);
            });
        });
    });

    app.delete("/api/books/:id", function (req, res) {
        db.Book.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBook) {
            res.json(dbBook);
        });
    });
};