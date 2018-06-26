// Require npm express
var express = require("express");

// Variable router now uses the express' Router function
var router = express.Router();

// Import the model (book.js) to use its database functions.
var book = require("../models/book.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    book.selectAll(function (data) {
        var booksObject = {
            books: data
        };
        console.log(booksObject);
        
        res.render("index", booksObject)
    });
});

router.get("/books/:name", function (req, res) {
    var condition = "book_name = " + req.params.name;

    book.selectOne(function (data) {
        var bookObject = {
            book: data
        };
        console.log(bookObject);

        res.render("book", bookObject);
    });
});

router.get("/api/books", function (req, res) {
    book.selectAll(function (data) {
        var booksObject = {
            books: data
        };
        res.json(booksObject);
    })
})

router.post("/api/books", function (req, res) {
    book.insertOne(["book_name", "category"], [req.body.book_name, req.body.category], function (result) {
        // Send back the ID of the new book
        res.json({ id: result.insertId });
    });
});

// Export routes for server.js to use.
module.exports = router;

// SelectOne stil needs to have some sort of rendering done in here
// I'll get that going once I talk to the group