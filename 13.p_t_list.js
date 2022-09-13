// // questionOne = {
// //     question: "Who is my favorite superhero?",
// //     answer: "Dhruv"
// //   }
  
// //   questionTwo = {
// //     question: "Which is my favorite sad song?",
// //     answer: "Channa Meraya"
// //   }
// //   console.log(questionOne)
// //   console.log(questionTwo)

// var readlineSync = require("readline-sync");
// var score = 0
// var userName = readlineSync.question("what is your name");
// console.log("Welcome " + userName + " to do you know Mes Shanti Kumari");
// // play funcation

// function play(question,answer) {
//     var userAnswer = readlineSync.question[question];
//     if (userAnswer === answer) {
//         console.log("right");
//         score = score + 1
//         // console.log("Current score: " , score)
//     } else {
//         console.log("wrong")
//         // score = score - 1
        
//     }
// }
// //colling this function
// play("Where do I live","Banglore")
// play("My favourit superHero could be ","Dhrue")



// IT IS RIGHT ..............

var readlineSync = require("readline-sync");

var score = 0

var userName = readlineSync.question("What's your name ? ");

console.log("Welcome " + userName + " to So You KNOW Shanti!");

//play funcation
function play(question , answer) {
    var userAnswer = readlineSync.question(question);  
        
        if (userAnswer === answer) {
            console.log("right");
            score = score + 1
        } else { 
            console.log("wrong")

        }
        console.log("current score ", score);
        console.log("........")
    }
    play("Where do I Live ","Banglore")
    play("my favourit super hero ","dhru")