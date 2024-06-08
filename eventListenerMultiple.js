

// add Listener on button 1
document.querySelectorAll(".myButton")[0].addEventListener("click", function(){

    var text = this.innerHTML; 
    document.querySelector("h1").innerHTML = text + " is clicked";
});

// add Listener on button 2
document.querySelectorAll(".myButton")[1].addEventListener("click", function(){

    var text = this.innerHTML; 
    document.querySelector("h1").innerHTML = text + " is clicked";
});

// add Listener on button 3
document.querySelectorAll(".myButton")[2].addEventListener("click", function(){

    var text = this.innerHTML; 
    document.querySelector("h1").innerHTML = text + " is clicked";
});


// use loop for simplifying the code
var len = document.querySelectorAll(".myButton").length;

for (var i =0; i <3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){

        var text = this.innerHTML; 
        document.querySelector("h1").innerHTML = text + " is clicked";
    });
}