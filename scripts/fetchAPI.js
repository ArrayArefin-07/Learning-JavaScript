// 4 way to call api - XMLHttpRequest, fetch, axios, jquery

//fetch() -has replaced XMLHttpRequest
// fetch() -global method for making HTTP Request
//2 way to call -the, async await

// + fetch() is easy to use compare to XMLHttpReauest
// + fetch() return a promise
// - returns a promise
// - returned promise can only handle networke error
// - dose not support all the older browser

//call using then
console.clear();
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
  // method: "PUT",
  // method: "POST",
  // method: "PATCH",
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

//call using async await

const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if(!res.ok) {
    const message = `Eror: ${res.status}`;
    throw new Error(message)
  }
  const data = await res.json();
  return data;
};


const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
    method: 'DELETE',
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
};
deleteData();


// const updateSingleData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PATCH',
//     body: JSON.stringify({
      
//       title: 'fooRRRRR',
      
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
// };
// updateSingleData();



// const updateData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'fooNaaa',
//       body: 'barNaaaa',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
// };
// updateData();

// const sendData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts",{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
// };
// sendData();


// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
// };
// getData();