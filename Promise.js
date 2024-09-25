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
})

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

console.log("End");
