// npm dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Variable app now refers to express
var app = express();

// Allowing express to access the port at 3000 if it isn't already
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Handlebars initialization
var exphbs = require("express-handlebars");

// Handlebars in express
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

app.use(routes);

// Listening to the server
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});