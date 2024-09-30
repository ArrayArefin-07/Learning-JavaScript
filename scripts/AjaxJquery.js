// 4 way to call api - XMLHttpRequest, fetch, axios, jquery

// add jquery library cdn
//ajax -asynchronous javascript and xml

console.clear();
// console.log(window);

const makeRequest = async (url, method, data) => {
  try {
    const result = await $.ajax({
      url: url,
      method: method,
      data: data
    });
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//Create data using jquery post method
const createData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
    title: "foo",
    body: "bar",
    userId: 1,
  }).then((res) => console.log(res));
};

createData();

// //get data using jquery
// const getData = () => {
//   makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET')
//   .then((res) => console.log(res))
// };

// getData();
