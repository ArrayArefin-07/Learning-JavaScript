// for vs foreach loop

var numbers = [10,20,30,40];

//using of for loop
for(var x=0; x<numbers.length; x++ ){
  console.log(numbers[x]);
}

//uses of forEach Loop
numbers.forEach(myFunction)
function myFunction(x){
  console.log(x);
}


numbers.forEach(function(x){
  console.log(x);
})

var squareNumbers = [];
numbers.forEach(function(x){
  squareNumbers.push(x*x);
})
console.log(squareNumbers);

//adding 5 everytime with numbers
numbers.forEach(function(x,index,arr){
  arr[index] = x+5;
})
console.log(numbers);


// map, filter function 
var num = [2,3,4,5]
var squreNum = num.map(function(x){
  // squreNum.push(x*x);
  //No need to push in map function just return the value
  return x * x;
  
})
console.log("Map "+squreNum);
 