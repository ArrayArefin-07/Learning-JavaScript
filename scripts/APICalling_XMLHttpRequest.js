console.clear();

//event - onload(), onerror()
//property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()

const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.setRequestHeader('Content-Type', 'application/json');

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

sendData();


//last watch 17:00 min