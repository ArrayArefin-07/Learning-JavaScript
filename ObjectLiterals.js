//Object Literals

//Object property Initilizer Short Hand method

function studentInfo1(name, age) {
  return {
    // name : name,
    // age : age
    //Use case in ES6 
    name, 
    age
   }
}

console.log(studentInfo1("Mobasher Arefin", 24));

//concise methods 
let message = {
  // body : function(){
  //   return `Hi, I am Object Function`
  // }
  //using concise method 

  body(){
    return `Hi, I am Object Function`
  }
}

console.log(message.body())
