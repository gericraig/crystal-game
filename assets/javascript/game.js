
$(document).ready(function () {

    // Have the computer randomly pick a number between 1-12, changing each round.
    var compPick = Math.floor(Math.random() * 12) + 1;
    console.log("compPick: " + compPick);
    $(".randomNumber").html(compPick);


    // VARIABLEs_________________________________________________________________

    // Have the computer assign the randome number to the four choices.

    // place holder

    // Scores the will be shown on the screen
    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var score = 0;
    console.log("score: " + score);

    // Resetting the game 
    compPick = Math.floor(Math.random() * 12) + 1;
    console.log("compPick: " + compPick);
    $(".randomNumber").html(compPick);










})