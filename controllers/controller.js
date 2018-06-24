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

router.get("/api/books", function (req, res) {
    book.selectAll(function (data) {
        var booksObject = {
            books: data
        };
        res.json(booksObject);
    })
})

router.post("/api/books", function (req, res) {
    burger.insertOne(["book_name", "category"], [req.body.book_name, req.body.category], function (result) {
        // Send back the ID of the new book
        res.json({ id: result.insertId });
    });
});

// Export routes for server.js to use.
module.exports = router;