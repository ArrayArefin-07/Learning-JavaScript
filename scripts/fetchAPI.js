// 4 way to call api - XMLHttpRequest, fetch, axios, jquery

//fetch() -has replaced XMLHttpRequest
// fetch() -global method for making HTTP Request
//2 way to call -the, async await

// + fetch() is easy to use compare to XMLHttpReauest
// + fetch() return a promise
// - returns a promise
// - returned promise can only handle networke error
// - dose not support all the older browser

console.clear();
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
   
    title: "fooMANAAAAAAAAAA",
   
  }),
})
  .then((res) => {
    if (!res.ok) {
      const message = `Eror: ${res.status}`;
      throw new Error(message);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
