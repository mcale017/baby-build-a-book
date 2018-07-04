// Content
$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBook = {
            theme: $("[name=theme]:checked").val().trim(),
            // character: $("[name=character]:checked").val().trim(),
            name: $("#char_name").val().trim(),
            bff_name: $("#bff_name").val().trim(),
            fav_animal: $("#fav_animal").val().trim(),
            super_hero: $("#super_hero").val().trim(),
            fav_color: $("#fav_color").val().trim(),
            fav_food: $("#fav_food").val().trim(),
        };

        console.log(newBook);

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