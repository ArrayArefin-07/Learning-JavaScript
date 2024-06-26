
for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        // console.log(text);
        playAnimation(text);

    });
}

// add keypress Listener 
document.addEventListener("keypress", function(event){
    var text = event.key;
    playAnimation(text);
});


function playAnimation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    }, 1000);
}

// another example of Keypress Listener 

var count = 0;

document.querySelector("textarea").addEventListener("keypress", function(event){

    count++;
    var text = event.key;
    document.querySelector("p").innerHTML = "you have pressed " + text;
    document.querySelector("p").innerHTML = "you have pressed " + count;
});