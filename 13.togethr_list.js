var readlineSync = require("readline-sync");

var score = 0

var userName = readlineSync.question("What's your name ? ");

console.log("Welcome " + userName + " to So You KNOW Shanti!");

//play funcation



// function play(question , answer) {
//     var userAnswer = readlineSync.question(question);  
        
//         if (userAnswer === answer) {
//             console.log("right");
//             score = score + 1
//         } else { 
//             console.log("wrong")

//         }
//         console.log("current score ", score);
//         console.log("........")
//     }


//     // Array of object......
// var questionOne = [{
//     question: "Where do I Live ",
//     answer:"Banglore"
// } , {
//     question: "My faviort superHero would Is " ,
//     answer: "Dhuru"
// }];

// // Loop..
// console.log(questionOne.length)

// for (var i=0; i<questionOne.length; i++) {
//     var currentquestion = questionOne[i];
//     // play(questionOne[i][question],question[i][answer])
// }
// console.log("Current score",score)