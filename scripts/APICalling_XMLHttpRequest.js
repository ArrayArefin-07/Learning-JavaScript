console.clear();

//event - onload(), onerror()
//property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()

const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = () => {
    let data = xhr.response;
    // console.log(data)
    console.log(JSON.parse(data));
  };

  xhr.onerror = () => {
    console.log("Error is here ");
  };
  xhr.send(JSON.stringify(data));
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
};

const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
};

//update data in api
const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "fooNA",
    body: "barMA",
    userId: 1,
  });
};

//Update single data
const updateSingleData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "This is changed",
  });
};

//Delete Data in API
const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1", {});
};

// sendData();
// updateData();
// updateSingleData();
deleteData();

//last watch 17:00 min
