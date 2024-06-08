

// add Listener onn button 1
document.querySelectorAll(".myButton")[0].addEventListener("click", function(){

    var text = this.innerHTML; 
    document.querySelector("h1").innerHTML = text + " is clicked";
});

// add Listener onn button 2
document.querySelectorAll(".myButton")[1].addEventListener("click", function(){

    var text = this.innerHTML; 
    document.querySelector("h1").innerHTML = text + " is clicked";
});

// add Listener onn button 3
document.querySelectorAll(".myButton")[2].addEventListener("click", function(){

    var text = this.innerHTML; 
    document.querySelector("h1").innerHTML = text + " is clicked";
});