// var readlineSync = require("readline-sync");

// var score = 0;
// function play(question,answer) {
//     var userAnswer = readlineSync.question(question);
//     if (userAnswer === answer ) {
//         console.log("You are right!");
//         score = score + 1;
//     } else {
//         console.log("You are wrong!");
//         score = score - 1;

//     }
// }
// // calling the funcation...
// play("Where do I work ", "Microsoft");
// play("Where do I live ", "Banglore");
// console.log("your score is "+ score);

var score = 0;
var questionOne ="Am I older than 25? ";
var answerOne = "yes";
function play(question , answer) {
    input
    var userAnswer = readlineSync.question(questionOne);
    console.log("you entered " + userAnswer);
    //processe
    if (userAnswer === answerOne) {
        //output
        console.log("you are right!");
        score = score + 1;
        console.log("Score is: " + score)
    } else {
        //output
        console.log("you are wrong!");
        score = score - 1;
        console.log("Score is: " + score)
    }
}
play("Where do I work ", "Microsoft");
play("Where do I live ", "Banglore");
play(questionOne, answerOne)
var answer = "no";
play(questionTwo ,answerTwo)