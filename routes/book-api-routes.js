var db = require("../models");

module.exports = function(app) {
    app.get("/api/books", function(req, res) {
        db.Book.findAll({}).then(function(dbBook) {
            res.json(dbBook);
        });
    });

    // Route for being able to create dummy data into books table
    app.get("/api/books/seeds", function(req, res) {
        db.Book.sync({force: true}).then(function() {
            db.Book.bulkCreate([
                {title: 'title 1', page1: 'page 1', page2: 'page 2', page3: 'page 3', page4: 'page 4', page5: 'page 5', page6: 'page 6'},
                {title: 'title 2', page1: 'page 1', page2: 'page 2', page3: 'page 3', page4: 'page 4', page5: 'page 5', page6: 'page 6'},
                {title: 'title 3', page1: 'page 1', page2: 'page 2', page3: 'page 3', page4: 'page 4', page5: 'page 5', page6: 'page 6'},
                {title: 'title 4', page1: 'page 1', page2: 'page 2', page3: 'page 3', page4: 'page 4', page5: 'page 5', page6: 'page 6'},
                {title: 'title 5', page1: 'page 1', page2: 'page 2', page3: 'page 3', page4: 'page 4', page5: 'page 5', page6: 'page 6'}            
            ]).then(() => {
                return db.Book.findAll();
            }).then(books => {
                res.json(books);
            });
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