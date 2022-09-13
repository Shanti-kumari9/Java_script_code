[00:34, 12/11/2021] Shiva 2: What is javascript?
Javascript improves user experience to web pages and web-pages by converting static web-page to interactive web-pages.
How many data-types in JS?
We have six data-types in a JS.Boolean,string,number,undefined?

var imsatyam;
console.log(imsatyam);
console.log(typeof(imsatyam));
output=undefined,undefined
 
var imsatyam=null;
console.log(imsatyam);
console.log(typeof(imsatyam));
output=null,obj

What is prefix increment and postfix increment?

Var a=a++ =>postfix increment
var b=++b =>prefix increment
Control flow statement?
The  if statement executes a statement if a specified condition is true if statement is false so another statement is executed.
Var tomr=’rain’; 
if(tomr==’rain’){
console.log(“take a raincoat”)
}else{
console.log(“no need to raincoat”)
}.
Function?
What is a function?
Function is a block-of-code designed to perform 	a particular task.
function definition?
Before we use a function ,we need to define it .
A function definition (also a declaration,function statement ,consists a function keyword)
What is the difference between function parameters and function argument?
When we pass a parameter in a function so it's a called parameter and when we call a function so is it an argument..	




			Modern javascript/ES6  =>
Difference  between let and var and const.

Var => it is a function scope
Let and const=> it is a block scope

					Array in js?
Why do we use arrays?
when we need to store a multiple element  in a single 
Variable .

 Difference between for-in-loop and for- of-loop?
When we use for in loop it will give an index number.
when we use the for-of-loop it will give an element's name.
What is for-each-loop?
when we use for each-loop so we can find elements,index,array .
array.forEach(function(element,index,array){
   console.log(element,index,array);
})
 

CRUD-operstion_

Array=[“satyam”,”shukla”,”amit”,”rajesh”]
Array.push(“chicken”)
push()-method
when we use this method add one and more elements in 
end of the array and  array returns  new length of the array.
When we need to add elements first index of the array
unshift()
map()__method
we use the map method so it will give an array with results.
const array=[12,34,67,24,1,2,34,5,6]
let newArr = array.map((currelm,index,arr)=>{
	Return currelm >9;
})
console.log(array)
[01:32, 12/11/2021] Shiva 2: npm i prompt-sync