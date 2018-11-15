
$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var score = 0;


    // Generated random number
    var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);

    $("#targetNumber").text(randomNumber);
    $("#totalScore").text(score);
    $("#wins").text("Wins:" + " " + wins);
    $("#losses").text("Losses:" + " " + losses);

    var crystalImages = ["assets/images/one.jpg", "assets/images/two.jpg", "assets/images/three.jpg", "assets/images/four.jpg"];

    // use an array to generate random numbers for the images
    function setData() {
        for (var i = 0; i < crystalImages.length; i++) {

            var image = $('<img>');

            image.addClass('ghostImage');

            image.attr('src', crystalImages[i]);

            image.attr('data-crystalvalue', Math.floor(Math.random() * 12) + 1);

            $("#crystals").append(image);

        }
    }

    setData();

    // When the image is clicked it will show the randomly generated number
    $(".ghostImage").on("click", function () {

        var crystalValue = ($(this).data("crystalvalue"));

        score = score + crystalValue;

        $("#totalScore").text(score);

        // Game
        if (score === randomNumber) {
            wins++;
            $("#wins").text("Wins:" + " " + wins);
            $("#outcome").text("WINNER!");

        } else if (score > randomNumber) {
            losses++;
            $("#losses").text("Losses:" + " " + losses);
            $("#outcome").text("You Lose!");
        }
        if (score === randomNumber || score > randomNumber) {
            // Select new random number
            randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
            score = 0;
            $("#targetNumber").text(randomNumber);
            $("#totalScore").text(score);

        }

    });

});


