
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


