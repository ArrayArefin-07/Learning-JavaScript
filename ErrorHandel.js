// Error handling -> try, catch, finally, throw 
// try ... catch handle run time errors (program wich is )
// Error object 
//The finally statement -> execute code, after try and catch


// try{

//   // code test
//   alert("Hi everyone");

//   alert(x)
  

// }catch(err){
//   //handle error
//   alert("Inside catch Block");
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
// }finally{
//   alert("Bye Everyone");
// }


//handle error using  throw keyword
// the throw statement -> create custom errors

document.querySelector("#checkButton").addEventListener("click", function(){
  // alert("Button is clicked");
  var num = document.querySelector("#numTextfield").value;
  console.log(num); 
})
