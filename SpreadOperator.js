
function addNumbers(x, y, z){
  return x + y + z;
}

let numbers = [1,2,3]
console.log(addNumbers(numbers[0], numbers[1], numbers[2]))
//Using spread Operator
console.log(addNumbers(...numbers));

let numbers1 = [...numbers, 5, 6];
console.log(numbers1);

let numbers3 = [4, 5, 6]

let totalNumbers = numbers.concat(numbers3);
console.log(totalNumbers);
//concat using spread operator 
let TotalNumbers = [...numbers, ...numbers3]
console.log(TotalNumbers)


//Object concat  using Spread operator
let p1 = {
  name: "Mobasher Arefin",
  age : 30
}

let p2 = {
  nationality: "Bangladeshi",
  occupation: "student"
}

let p = {...p1, ...p2}
console.log(p)