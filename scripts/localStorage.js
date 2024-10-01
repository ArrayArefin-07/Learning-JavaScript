// web storage API - allows us to storage & read data in browser

// web storage API - localStorage , sessionStorage

// localStorage - store , read, update and remove  data

// no expire date: data never gets lost even if you close the browser 

// localStorage store data as key value pair - string




// console.log(localStorage);

// set data in localStorage
// for string
// setItem(key, value)
// localStorage.setItem("userName", "Mobasher Arefin");
// localStorage.setItem("password", "123456789");


//get data from local storage 
// getItem(key)
const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
console.log(userName, userPassword);


//update data to localStorage 

localStorage.setItem("userName", "Mobasher Talha");
localStorage.setItem("password", "123456789");


// remove data from localStorage 

localStorage.removeItem("userName");
localStorage.removeItem("password");


//usecase for array
// set data in localStorage
// setItem(key, value)
const countries = ["Australia", "Bangladesh", "Nepal"];
localStorage.setItem("countries", JSON.stringify(countries));
localStorage.setItem("password", "0123456789");


//usecase for array
//get data from local storage 
// getItem(key)
const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);    


localStorage.clear();


//start from session storage