// find(callback, value) return the value of the first element that pass certain condition

let numbers = [5,55,14,5,78];

let firstNumber = numbers.find(x => x%2===0);
console.log(firstNumber)
//using seperate function and cal it 
const evenNumber = (value, index, array) =>{
  if(value%2===0)
    return value;
}
let firstEvenNumber = numbers.find(evenNumber);
let firstEvenNumberIndex = numbers.findIndex(evenNumber)
console.log(firstEvenNumber)
console.log(firstEvenNumberIndex)


//find() using object

const student = [
  {
    id : 101,
    gpa : 2.5
  },
  {
    id : 102,
    gpa : 3.5
  },
  {
    id : 103,
    gpa : 4.5
  },
  {
    id : 104,
    gpa : 5
  },
]
console.log(student.find(x => x.gpa>4));
console.log(student.findIndex(x => x.gpa>4));




//findIndex (callback, value) return the index of the first element that pass certain condition
