// var a = require ("readline-sync");

// var score = 0;

// var userName = a.question("what is your name ...");
// console.log("Welcome "+ userName + " to do you know Shanti kumari!..")

// // data a file score...
// var highscore = [
//     {
//         name : "shanti",
//         score:10
//     },
//     {
//         name : "Ankit",
//         score: 9
//     }
// ]




// // play funcation
// function play(question, answer) {
//     var userAnswer = a.question(question);
//     if (userAnswer.toUpperCase() === answer.toUpperCase()) {
//         console.log("right..")
//         score = score + 1
//     } else {
//         console.log("wrong..")
//     }

//     console.log("Current score.." , score);
//         console.log("...........")
// }
// // Array of object.....
// var questions = [{
//     question: "Where do I Live ",
//     answer:"Banglore"
// } , {
//     question: "Where do I work " ,
//     answer: "Microsoft...",
// } , {
//     question: "My favourit superHero is.. ",
//     answer:"Brother"
// }];
// for (var i=0; i<questions.length; i++) {
//     var b = questions[i];
//     play(b.question, b.answer)
// }

// console.log("YEAH! YOU SCORED: ", score)



// console.log("Checkout the high score", highscore)



var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Shanti",
    score: 3,
  },

  {
    name: "Ankit",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "My favorite superhero would be? ",
  answer: "Dhruv"
},
{
  question: "Where do I work? ",
  answer: "Microsoft"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Shanti..?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


