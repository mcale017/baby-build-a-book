// Content
var db = require("../models");

$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBook = {
            theme: $("name=theme]:checked").val().trim(),
            title: $("#char_name").val().trim(),
            page1: $("#bff_name").val().trim(),
            page2: $("#fav_animal").val().trim(),
            page3: $("#super_hero").val().trim(),
            page4: $("#fav_color").val().trim(),
            page5: $("#fav_food").val().trim(),
            page6: "hello"
        };

        $.ajax("/api/books", {
            type: "POST",
            data: newBook
        }).then(
            function () {
                console.log("New baby book added to the database.");
                location.reload();
            }
        );
    });
});