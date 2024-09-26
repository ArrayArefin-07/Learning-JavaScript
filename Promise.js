console.log("welcome");

//how to create promise pending, resolve, reject
//promise created
const promise1 = new Promise((resolve, reject) => {
  let completePromise = true;
  if (completePromise) {
    resolve("completeted promise 1");
  } else {
    reject("not completed promise 1");
  }
});

//promise 2 created
const promise2 = new Promise((resolve, reject) => {
  resolve("completed promise 2");
});

// console.log(promise1)
//call promise
promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//call promise 2
promise2.then((res) => console.log(res));

//call all promise
Promise.all([promise1, promise2]).then((res) => console.log(res));

console.log("End");

//promise race
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("completed promise 3");
  }, 2000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("completed promise 4");
  }, 1000);
});

//call  promise race
Promise.race([promise3, promise4]).then((resp) => console.log(resp));

//promise chaining
const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("Task 1 is completed");
  });
};

const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve("Task 2 is completed 2sec");
    })
  });
};

const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("Task 3 is not completed");
  });
};

const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("Task 4 is completed");
  });
};

//Call promise chaining
taskOne()
.then((res) => console.log(res))
.then(taskTwo)
.then((res) => console.log(res))
.then(taskThree)
.then((res) => console.log(res))
.then(taskFour)
.then((res) => console.log(res))
.catch((err) => console.log(err));