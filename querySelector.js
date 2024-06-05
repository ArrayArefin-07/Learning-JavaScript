// getElementById()
// getElementsByTagName()
// getElementsByClassName()

// querySelector()

// using id
document.querySelector("#pid").innerHTML = "This is changed";

//using class
document.querySelector(".pidc").innerHTML = "This is changed by class";


document.querySelector("a").innerHTML = "new text";
document.querySelector("li a").innerHTML = "new text";

document.querySelector("div a").innerHTML = "new text";

document.querySelector(".my-div a").innerHTML = "new text using class";


//querySelector

document.querySelectorAll("p")[2].innerHTML = "new para";