var db = require("../models");

module.exports = function(app) {
    app.get("/api/themes", function(req, res) {
        db.Theme.findAll({}).then(function(dbTheme) {
            res.json(dbTheme);
        });
    });

    // Route for being able to create dummy data into themes table
    app.get("/api/themes/seeds", function(req, res) {
        db.Theme.sync({force: true}).then(function() {
            db.Theme.bulkCreate([
                {
                    name: "beach",
                    title: "myName's Day at the Beach",
                    page1: "It was a bright, sunny summer day when myName went to visit the beach with their parents and best friend, myBff.",
                    page2: "myName loved going to the beach and myActivity in the water and wave at the fish swimming by. Often they would name the fish after myCharacter.",
                    page3: "Today, myName was looking for a very special shell. This shell would allow them to hear the ocean, even when they returned back home to the big city! Can you guess what kind of shell this is?",
                    page4: "It is a special shell they were looking for. As it was big, bright, and myColor. They looked for it in the water and they looked for it in the sand.",
                    page5: "I bet if we had a myAnimal, they could help us find the shell!",
                    page6: "They looked everywhere for the special shell, but sadly, they did not find it. While searching, though, they came across a food cart that was selling myFood, so they enjoyed a snack together."
                },
                {
                    name: "rainforest",
                    title: "A Forest Hike with myName",
                    page1: "Once upon a time, there was a little bear named myName.",
                    page2: "myName lived in a little myColor treehouse surrounded by flowers and streams. And they lived with myAnimal.",
                    page3: "myName's best friend was another little bear named myBff.",
                    page4: "During the day, the little bears would often play in the streams, climb trees and play myActivity.",
                    page5: "When myName and myBff got hungry, they would eat fish, slurp honey and snack on myFood.",
                    page6: "Sometimes, when they were out on an adventure, they would pretend to be myCharacter. And when their day of adventures was done, they would return to the treehouse for well needed nap."
                },
                {
                    name: "space",
                    title: "myName's Space Adventure",
                    page1: "My name is myName and I think it would be cool to be in the outer space.",
                    page2: "I would travel in my myColor rocket.",
                    page3: "If it gets scary while travelling in space, I will think about myCharacter and I'll feel safe.",
                    page4: "Inside my rocket, I would have myFood to eat while I peek out the window and look at the stars.",
                    page5: "I would go to the moon and myActivity. It might be hard because you float like a bubble in space.",
                    page6: "I would wave to my family and I would wave to myBff even though they might not see me."
                },
                {
                    name: "park",
                    title: "Walk with myName at the Park",
                    page1: "Welcome to Central Park. My name is myName. I cannot wait to tell you about the park.",
                    page2: "My favorite person to walk in the park with is myBff. We walk together almost everyday.",
                    page3: "The first place we are going to go to is the Central Park Zoo. I hope we see myAnimal.",
                    page4: "At the park, there are lots of food to buy. There's my favorite food, myFood now! Let's get something to eat!",
                    page5: "Next, we are going to ride on the carousel. My favorite one to ride is the myColor one that goes up and down. myBff likes the white horses.",
                    page6: "When we aren't at the zoo or riding the carousel, we often play myActivity or pretend to be myCharacter."
                }
            ]).then(() => {
                return db.Theme.findAll();
            }).then(themes => {
                res.json(themes);
            });
        });
    });

    app.get("/api/themes/:id", function(req, res) {
        db.Theme.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbTheme) {
            res.json(dbTheme);
        });
    });
};