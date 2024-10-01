// web storage API - allows us to storage & read data in browser

// web storage API - localStorage , sessionStorage

// localStorage  vs  sessioStorage 
// memorie- 10mb  vs  5mb
// permanent  vs  session (tab)

// for string
//set data to sessionStorage
// sessionStorage.setItem("user", "Arefin");   

//get data from sessionStorage
// const userName = sessionStorage.getItem("user");
// console.log(userName)

//remove data from sessionStorage
// sessionStorage.removeItem("user");

// cleare data from sessionStorage
// sessionStorage.clear();



//usecase for array
//set data from Session storage 


const user = { id: "101", name: "Mobasher"};
sessionStorage.setItem("user",JSON.stringify(user));

//get data from Session storage 

const userInfor = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfor);