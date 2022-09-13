// var a = require ("readline-sync");

// var score = 0;

// var userName = a.question("what is your name ...");
// console.log("Welcome "+ userName + " to do you know Shanti kumari!..")
// // play funcation
// function play(question, answer) {
//     var userAnswer = a.question(question);
//     if (userAnswer === answer) {
//         console.log("right..")
//         score = score + 1
//     } else {
//         console.log("wrong..")
//     }

//     console.log("Current score.." , score);
//         console.log("...........")
// }

// play("Where do I live..","Banglore");
// play("My favurit superHero is... ","Papa");



var a = require ("readline-sync");

var score = 0;

var userName = a.question("what is your name ...");
console.log("Welcome "+ userName + " to do you know Shanti kumari!..")
// play funcation
function play(question, answer) {
    var userAnswer = a.question(question);
    if (userAnswer === answer) {
        console.log("right..")
        score = score + 1
    } else {
        console.log("wrong..")
    }

    console.log("Current score.." , score);
        console.log("...........")
}
// Array of object.....
var questions = [{
    question: "Where do I Live ",
    answer:"Banglore"
} , {
    question: "Where do I work " ,
    answer: "Microsoft...",
} , {
    question: "My favourit superHero is.. ",
    answer:"Brother"
}];
for (var i=0; i<questions.length; i++) {
    var b = questions[i];
    play(b.question, b.answer)
}

console.log("YEAH! YOU SCORED: ", score)