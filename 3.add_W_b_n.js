// Frist methoud...........................

// var prompt = require("prompt-sync")();
// var shanti = prompt("choose your name......:-");
// console.log("welcome",shanti)

//SECOND METHOUD..................
// var prompt = require("prompt-sync")();
// var shanti = prompt("choose your name......:-");
// var welcomeMassage ="Welcome" + shanti; //string concatnation......
// console.log(welcomeMassage);

// THRID METHOUD................................
// var prompt = require("prompt-sync")();
// var shanti = prompt("choose your name......:-");
// console.log("Welcome" + " ",shanti);
// ===============================================================================================

// var prompt = require("prompt-sync")();
// var a= "Welcome"
// var userName = prompt("choose your name......:-");
// console.log(a,userName)

var a = require('readline-sync')
var userName = a.question('May i have your name..')
var welcomeUser=("Welcome  " +userName)     //if I am putting here coma then it is not working
console.log(welcomeUser)



// var a = require('readline-sync')
// var userName = a.question('May i have your name..')
// console.log("welcome",userName)

