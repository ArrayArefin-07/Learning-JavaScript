//use regular if else statement

var number = Number(prompt("Enter a number"))

// if(number>0){
//     console.log("positive");
// }
// else{
//     console.log("negative"); 
// }

// use Ternary Operator  -> for two condition 

// var result = number > 0 ? "positive" : "negative"
// console.log(result)

// use Ternary Operator  -> for more than two condition 

var result = number > 0 ? "positive" : number < 0 ? "Negative"  : "zero"
console.log(result)
