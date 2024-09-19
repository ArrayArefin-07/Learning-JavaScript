//Uses of Default para meters
"use strict"
function message(text = "Hello this is default parameters"){
  console.log(`${text}`)
}
message("I love JS ES6");
message();

//Uses of Rest Parameter

"use strict"

function printNumbers(x,y, ...z){
  console.log(`x = ${x}, y = ${y}, z= ${z}`);
}

printNumbers(10,20,30,40,50);