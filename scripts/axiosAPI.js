// 4 way to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it help to make request from browser (plain js/Vew/React/Angular) , node.js

// + very easy to use
// + it support all modern browser including IE
// + it returns promise
// + throws error brilliantly
// + no need to set heder cause axios is intelligent

//axios (config)
// axios(url [, config])

//axios.get(url [, config])
//axios.post(url [, config])
//axios.put(url [, config])
//axios.patch(url [, config])
//axios.delete(url [, config])

//axios return response object - data, status, statusText. header, config

console.clear();
// console.log(window);

// axios.get method
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err));

// axios.post method
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err));

// axios.put method

axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "fooMAAA",
      body: "barMAAAA",
      userId: 1,
    }),
  })
  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err));

// axios.patch method

axios
  .patch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      body: "barNaaaaaaaaaaa",
    }),
  })
  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err));

// axios.delete method
axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err));

// use async await in axios method

console.clear();
const makeRequest = async (config) => {
  return await axios(config);
};

const createData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "Naafoo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
createData();

//create data 

// const createData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "post",
//     data: JSON.stringify({
//       title: "Naafoo",
//       body: "bar",
//       userId: 1,
//     }),
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// createData();


//get data
// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// };
// getData();
