
console.log("heyo")
// VARIABLES-------------------------------------------------

// Scores the will be shown on the screen
var wins = 0;
console.log("wins: " + wins);

var losses = 0;
console.log("losses: " + losses);

var score = 0;
console.log("score: " + score);

var comPick = 0;
console.log("compPick: " + comPick);

// Have the computer randomly pick a number between 1 - 118 that the player has to match, changing each round

// Have the computer assign a random number between 1-12 that will be assigned to the four gems
// var gemNumber = Math.floor(Math.random() * 12) + 1;
// console.log("gemNumber: " + gemNumber); 

var gemOne = Math.floor(Math.random() * 12) + 1;
console.log("Gem 1: " + gemOne);


var gemTwo = Math.floor(Math.random() * 12) + 1;
console.log("Gem 2: " + gemTwo);


var gemThree = Math.floor(Math.random() * 12) + 1;
console.log("Gem 2: " + gemThree);


var gemFour = Math.floor(Math.random() * 12) + 1;
console.log("Gem 2: " + gemFour);

// FUNCTIONS-----------------------------------------------------

function comPick() {
    Math.floor(Math.random() * 100) + 19;
}

function clickImage(number) {}


function gem0() {
    Math.floor(Math.random() * 12) + 1;
    console.log(this.attr);
}

$(".image").on("click", function() {
    console.log("hi")
    console.log($(this))
})
console.log("hi")

// "Gem 1: " + gemOne






// var comPick = Math.floor(Math.random() * 100) + 19;
// console.log("compPick: " + comPick);
// $(".randomNumber").html(comPick);

// $ ('#img1').on ('click, function'(){
//     if (value === 0) 
// })




// $(".image").on("click", function () {
//     
//         var newScore = score += parseInt($(this).attr("value"));
//         console.log("New Score: " + newScore);
//         $(".scoreDisplay").html(newScore);
//     }

// }


//     var newScore = score += parseInt($(this).attr("value"));
// console.log("New Score: " + newScore);
// $(".scoreDisplay").html(newScore);


// var newScore = score += parseInt($(this).attr("value"));
// console.log("New Score: " + newScore);
// $(".scoreDisplay").html(newScore);

// var newScore = score += parseInt($(this).attr("value"));
// console.log("New Score: " + newScore);
// $(".scoreDisplay").html(newScore);
// }


// record the score 

// if (newScore === comPick) {
//     wins++;
//     $(".wins").html("Wins: " + wins);
//     console.log("Wins: " + wins);
//     reset();
// } else if (newScore > comPick) {
//     losses++;
//     $(".losses").html("Losses: " + losses);
//     console.log("Losses: " + losses);
//     reset();
// }


// if (newScore === comPick) {
//     wins++;
//     $(".wins").html("Wins: " + wins);
//     console.log("Wins: " + wins);
//     reset();
// } else if (newScore > comPick) {
//     losses++;
//     $(".losses").html("Losses: " + losses);
//     console.log("Losses: " + losses);
//     reset();
// }


