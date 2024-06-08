
// using event Listener 
document.querySelector("button").addEventListener("click",myFunction);

// define the function
function myFunction() {
    alert("Hello");
}



// using anonymous function

document.querySelector("button").addEventListener("click",function () {
    alert("Hello");
});


var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function(){

    myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout", function(){

    myVar.classList.remove("my-style");
});