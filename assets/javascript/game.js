$(document).ready(function(game) {

    // VARIABLEs_________________________________________________________________

    // Scores the will be shown on the screen
    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var score = 0;
    console.log("score: " + score);

    // Resetting the game 
    comPick = Math.floor(Math.random() * 100) + 19;
    console.log("compPick: " + comPick);
    $(".randomNumber").html(comPick);


    // Have the computer randomly pick a number between 1 - 118 that the player has to match, changing each round
    var comPick = Math.floor(Math.random() * 100) + 19;
    console.log("compPick: " + comPick);
    $(".randomNumber").html(comPick);


    // Have the computer assign a random number between 1-12 that will be assigned to the four gems

    // (i = 0 ; i < 4 ; i++) 
    // var gemNumber = Math.floor(Math.random() * 12) + 1;
    // console.log("gemNumber: " + gemNumber); 
    // $("#img1") part I found online. What I was thinking did not work at all

    var gemOne = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 1: " + gemOne);
    $("#img1").html("<img src=" + "../images/one.jpg" + " value=" + gemOne + ">");

    var gemTwo = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 2: " + gemTwo);
    $("#img2").html("<img src=" + "../images/two.jpg" + " value=" + gemTwo + ">");

    var gemThree = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 2: " + gemThree);
    $("#img3").html("<img src=" + "../images/three.jpg" + " value=" + gemThree + ">");

    var gemFour = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 2: " + gemFour);
    $("#img4").html("<img src=" + "../images/four.jpg" + " value=" + gemFour + ">");


    // record the score 

    if (newScore === comPick) {
        wins++;
        $(".wins").html("Wins: " + wins);
        console.log("Wins: " + wins);
        reset();
    } else if (newScore > comPick) {
        losses++;
        $(".losses").html("Losses: " + losses);
        console.log("Losses: " + losses);
        reset();
    }

    // Had to reseatch this last part. 

    $("img").on("click", function() {
        var newScore = score += parseInt($(this).attr("value"));
        console.log("New Score: " + newScore);
        $(".scoreDisplay").html(newScore);

        if (newScore === comPick) {
            wins++;
            $(".wins").html("Wins: " + wins);
            console.log("Wins: " + wins);
            reset();
        } else if (newScore > comPick) {
            losses++;
            $(".losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
            reset();
        }
    }
)}
