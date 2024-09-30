// 4 way to call api - XMLHttpRequest, fetch, axios, jquery

// add jquery library cdn
//ajax -asynchronous javascript and xml 

console.clear();
// console.log(window);


const makeRequest = async (url, method) => {
  try{
    const result = await $.ajax({
      url: url,
      method: method,
    });
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

const getData = () => {
  makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET')
  .then((res) => console.log(res))
};

getData();