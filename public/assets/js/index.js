// Content
$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        console.log($("#avatar-selection").val());

        var newBook = {
            theme: $("[name=theme]:checked").val().trim(),
            avatar: $("#avatar-selection").val(),
            name: $("#name").val().trim(),
            bff: $("#bff").val().trim(),
            animal: $("#animal").val().trim(),
            character: $("#character").val().trim(),
            color: $("#color").val().trim(),
            food: $("#food").val().trim(),
            activity: $("#activity").val().trim()
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