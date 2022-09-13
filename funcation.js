// function sum(){
//     var a= 10 , b=5;
//     console.log(a+b);
// }
// sum()

// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,10)
// sum(20,10)


// ===================
// function sum(){
//     var a= 10, b=20;
//     var total = a+b;
// }
// console.log(sum());

// =====o/p====it will come "undifine"=================


// ========Funcation Expersion===========


// function sum(a,b){
//     console.log(a+b);
// }
// var a = sum(10,10)

//===========Return funcation Expersion=========


// function sum(a,b){
//     return (a+b);
// }
// var a = sum(10,100);
// console.log(a);



//===================Anonymous Funcation===============

//==========anonymous function me hosting kaam nhi krte===========
// a = function (){
//     console.log("hello")
// }
// a()
// ==========Hosting 
// a=1
// a()

// var a = function(a,b){
//     return b=(a+b);
// }
// console.log(a(5,50));

//                ===return===

// var x = function(a,b){
//     return total = a+b;
// }
// var sum = x(50,20);
// console.log(sum);


// var x = function(a,b){

//     return total = a+b;
// }
// var sum = x(50,20);
// var sum1 = x(20,30);
// console.log(sum>sum1);


//==========Template litrles(template string)=============

// for(n=0;n<=10;n++){
//     tableOf = 10;
//     console.log(`${tableOf} * ${n} = ${tableOf*n}`);
// }




//===========Default parameter==============


// function mult(a,b=10){
//     return a*b;
// }
// console.log(mult(5));


// function mult(a,b){
//     return a*b;
// }
// console.log(mult(5));

// console.log(66/33);

//=============o/pNAN==========


// ==============Simpal way of doing function=================

// console.log(sum());
// function sum(){
//     let a = 5; b = 6;
//     return`The sum of those number ${a+b}`
// }


//===========Fat Arrow Function==============

// const sum = ()=> {
//     let a=5; b=6;
//     return`The sum of those number ${a+b}`
// }
// console.log(sum());

//==============second type=============


// const sum = ()=> {
//     let a=5; b=6;
//     return`The sum of those number ${(a=5)+(b=6)}`
// }
// console.log(sum());

//============Thrid type==================

// const sum = ()=> {`The sum of those number ${(a=5)+(b=6)}`}
// console.log(sum());

// ============Fourth type===========

// const sum = ()=> `The sum of those number ${(a=5)+(b=6)}`
// console.log(sum());


// ===========for of loop==================

// var mygol = ['Bignaus woman','Full stuck developar','Indian police' , 'Doctor', 'socical worker']
// for(let i=0;i<mygol.length;i++){
//     console.log(mygol[i]);
// }

// ====that was simple======


// ===========for of loop==================

// var mygol = ['Bignaus woman','Full stuck developar','Indian police' , 'Doctor', 'socical worker']
// for(let i of mygol){
//     console.log(i);
// }











