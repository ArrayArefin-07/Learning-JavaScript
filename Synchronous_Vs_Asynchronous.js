//Synchronous Programming
const taskOne = () => {
  console.log("Task-1");
};

//Asynchronous programming
const dataLoading = () => {
  console.log("Data Loading");
}

const taskTwo = () => {
  setTimeout(dataLoading, 2000);
};

const taskThree = () => {
  console.log("Task-3");
};

const taskFour = () => {
  console.log("Task-4");
};

const taskFive = () => {
  console.log("Task-5");
};
taskOne()
taskTwo()
taskThree()
taskFour()
taskFive()

console.log("Task1");
console.log("Task2");
console.log("Task3");
console.log("Task4");
console.log("Task5");
