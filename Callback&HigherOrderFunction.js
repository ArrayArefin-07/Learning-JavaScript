//Callback and higher order function


function square(x) {
  console.log(`squre of ${x}: ${x * x}`);
}

// const y = square;
// y(6)

square(5);


//higher Order Function 

function higherOrderFunction(num, Callback){
  Callback(num);
}

higherOrderFunction(6, square)



const taskOne = (Callback) => {
  console.log("Task-1");
  Callback();
};

const taskTwo = (Callback) => {
  setTimeout(() => {
    console.log("Task-2. Data Loading");
    Callback();
  }, 3000);
  
};

const taskThree = (Callback) => {
  console.log("Task-3");
  Callback();
};

const taskFour = (Callback) => {
  console.log("Task-4");
  Callback();
};

const taskFive = () => {
  console.log("Task-5");
};

taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      taskFour(() => {
        taskFive();
      })
    });
  });
});

console.log('hi');
document.querySelector("button").addEventListener('click', ()=>{
  console.log('button is clicked');
})

console.log('bye');