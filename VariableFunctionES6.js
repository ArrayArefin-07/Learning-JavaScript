//using var keyword

// var x = 6;
// if (true) {
//   var x = 5;
// }
// console.log(x)

// using let keyword 

// let x = 6;
// if (true) {
//   let x = 5;
// }
// console.log(x)

//let using loop

// let x = 11;
// for (let x = 1; x <= 10; x++){
//   // console.log(x);
// }
// // console.log(x)

var x = 25;
var y = 30;

var sum = x + y;

console.log("Sum is " + sum + ". The end");
console.log(`sum is ${sum} . the end`);

let name = "Mobasher Arefin";
let message = `I am ${name} I am learning JavaScript`;
console.log(message);


//Regular Function in js

// function add(x,y) {
//   var sum = x + y;
//   console.log(sum);
// }

// add(20,30);


//Function in ES6

const add = (x,y) => {
  let sum = x + y;
  console.log(sum);
}

add(20,40);