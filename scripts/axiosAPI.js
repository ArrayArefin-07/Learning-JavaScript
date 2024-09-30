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
.then((res) => console.log(res.data))
.catch((err) => console.log(err));

// 
