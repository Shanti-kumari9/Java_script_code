// var area = "circle"
// var PI = 3.142, l=5,b=4, r=3;

// switch (area){
//     case 'circle':
//         console.log("the area of circle is : " + PI*r**2);
//     break;
//     case 'Triangle':
//         console.log("the area of Triangle is : " + (l*b)/2);
//     break;
//     case 'rectangle':
//         console.log("the area of rectangle is : " + (l*b));
//     break

//     default:
//         console.log("enter vaile data");

// }



// ============+++++CALUCALTER QUESTION++++===============


var readline = require('readline-sync');
num1 = readline.questionInt("Enter the frist number : ");
num2 = readline.questionInt("enter your second number : ");
symbol = readline.question("Enter the symbol : ");

switch(symbol){
    case('+'):
        console.log(num1+num2);
    break

    case('-'):
        console.log(num1-num2);
    break

    case('/'):
        console.log(num1/num2);
    break

    case('*'):
        console.log(num1*num2);
    break

    default:
        console.log("enter the proper operater : ");
    break

}