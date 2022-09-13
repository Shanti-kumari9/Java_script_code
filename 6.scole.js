// let rlSync = require('readline-sync');

// let number1 = rlSync.question('Enter the first number\n');
// let number2 = rlSync.question('Enter the second number\n');
// let sum = number1 + number2;

// console.log(`The numbers ${number1} and ${number2} add to ${sum}`);

// var a = require("readline-sync")
// scroe = 0;
// var num = a.questionInt("Am I younger then 25")
// if (num<25){
//     console.log("you are right")
//     scroe = scroe + 1;
//     console.log("score is :"+ scroe)
// }else{
//     console.log("you are wrong")
//     scroe = scroe - 1;
//     console.log("score is :"+ scroe)
// }
var a = require("readline-sync")
var scroe = 0;
var questionOne = "Am I younger then 25"
var answerOne = "yes";

//input
var userAnswerAge = a.questionInt(questionOne);
console.log("your entered" + userAnswerAge);
//processing
if (userAnswerAge === answerOne){
    //output
    console.log("you are right")
    scroe = scroe + 1;
    console.log("score is :"+ scroe)
}else{
    //output
    console.log("you are wrong")
    scroe = scroe - 1;
    console.log("score is :"+ scroe)
}
