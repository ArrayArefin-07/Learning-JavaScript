var myvar = document.getElementsByTagName("h1")[0];
myvar.innerHTML = "say hello";


//creating html element  

var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading");

heading3.appendChild(text)

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);