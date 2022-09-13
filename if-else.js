// time= 5
// time=8
// time=10


 
// var time = 9;
// console.log(time);


// if (time >= 5 && time <= 6) {
//  console.log("sleep well");
// }
// else if (time >= 6 && time <= 7) {
//  console.log("Morning Exercise");
// }
// else if(time > 7 && time < 8.30){
//  console.log("Break+Breakfast");
// }
// else if ( time > 8.30 && time < 12){
//  console.log("Study");
// }



// +++++++++++  2  Question ++++++++++




// var choice ="overcast";
// if (choice === 'sunny') {
//    message = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.'
//  } else if (choice === 'rainy') {
//      message = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.'
//  } else if (choice === 'snowing') {
//      message = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.'
//  } else if (choice === 'overcast') {
//      message = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.'
//  } else {
//    message = 'Nothing'
// }
// console.log(message)


// ++++++++++ 3 Question ++++++++++++++++



// var day = "TUeSday".toLowerCase();
// if (day == "monday") {
//   console.log("Dhanwantari\nSiddhi\Kritika\Salon\nMayuri\Gauri");
// }
// else if (day == "tuesday") {
//   console.log("Keemaya\nRoshni\nPooja\Priyanka\nnalini\nManisha");
// }
// else if (day == "wednesday") {
//   console.log("Shrusti\Karuna\Parveen\Sandhya\nLeena\Karishma");
// }
// else if (day == "thursday") {
//   console.log("Nikita\nMona\nPriyanka\Tejashree\nLovely\Mehzebin");
// }
// else if (day == "friday") {
//   console.log("Pihu\Sejal\nChaya\Shrestha\nMonali\nAardhangya");
// }
// else if (day == "saturday") {
//   console.log("Gunjan\nShweta\nRani\nIsha\nKusu\Madhu\n");
// }
// else if (day == "sunday") {
//   console.log("Swati\nKhusboo\nidhi\Preeti\nDipti\nAnamika");
// }
// else {
//   console.log("Please enter valid week day")
// }





// +++++++++++++  Nested if-else ++++++++++++


// var x = 10;
// var y = 12
// var z = 90
 
// if (x > y){
//   if (x < z){
//       x = y
//   }
//   else{
//       m = z
//   }
// }
// else {
//   if(y > z){
//       m = y
//   }
//   else {
//       m = x
//   }
   
// }
// console.log(m)
 

// ++++++++++++++++ 5 Question++++++++++++++



// let isTrue = "True";
// if(isTrue){
//   console.log("Output should show")
// }
// if(isTrue === "False"){
//   console.log("Both are same")
// }
// else {
//   console.log("Please run it. if all conditions false")
// }



// var number = 12;
 
// if(Number%3 == 0){
//    console.log("choco")
// }
// else if (number % 7==0){
//    console.log("late")
// }
// else if (number%3==0 || number%7==0) {
//    console.log("Chocolate")
// }
// else {
//    console.log("Not divisible by 3 , 7")
// }

// ++++++++++++++++++Example++++++++++++++++

 
// var b="Hello this is my ‘Dell Laptop’ "
// console.log(b)



// var b="Hello this is my "Dell Laptop""
// console.log(b)                              // error    ---->> unexpected identifier
 


// console.log(6 / 12);  // Output: Infinity
// console.log(-16 / 12); // Output: -Infinity
// console.log(16 / -12); // Output: -Infinity




// a=Math.floor((Math.random() * 10) + 1); 
// console.log(a);

// console.log(Math.floor(-5.0));




// ++++++++++ I have to ask ++++++++++++


// browserType = 'mozilla';
// console.log(browserType.replace("Shanti"));




// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");

// console.log(result)






















// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");



// v=2

// let x = Math.random();

// console.log(v+x);


//++++++++++++++++++++=REVSION OF QUESTION =+++++++++++++++++++++++++++

// let a=100;
// let b=10;
// console.log((a>b)?("a, is greater then b" ): ("b is greater then a"));


// var readlineSync = require("readline-sync");
// var year = readlineSync.question("Enter your year name : ")
// if( ( year % 4) && (year % 100) || (year % 400) ){
//     console.log((year+" is not a leap year"));
// }else{
//     console.log(year+" is leep year");
// }


var readlineSync = require("readline-sync");

var operation = requride('Kaunse operation karna chahenge', 'a:addition/s:subtraction/d:division/m:multiplication')
var a = Number(prompt('Pehle number likho', '12'))
var b = Number(prompt('Dusra number likho', '34'))

if (operation == 'a') {
console.log(a+b)
} else if (operation == 's') {
console.log(a-b)
} else if (operation == 'd') {
console.log(a/b)
} else if (operation == 'm') {
console.log(a*b)
}
