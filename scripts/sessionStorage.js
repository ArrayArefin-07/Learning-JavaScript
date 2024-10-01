// web storage API - allows us to storage & read data in browser

// web storage API - localStorage , sessionStorage

// localStorage  vs  sessioStorage 
// memorie- 10mb  vs  5mb
// permanent  vs  session (tab)

//set data to sessionStorage
sessionStorage.setItem("user", "Arefin");   

//get data to sessionStorage
const userName = sessionStorage.getItem("user");
console.log(userName)