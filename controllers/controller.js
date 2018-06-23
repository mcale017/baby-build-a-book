// Require npm express
var express = require("express");

// Variable router now uses the express' Router function
var router = express.Router();

// Import the model (book.js) to use its database functions.
var book = require("../models/book.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    book.selectAll(function (data) {
        var bookObject = {
            books: data
        };
        console.log(bookObject);
        
        res.json(bookObject);
    });
});

router.get("/api/books", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.json(hbsObject);
    })
})

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;