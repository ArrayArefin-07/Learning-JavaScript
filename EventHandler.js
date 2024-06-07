
function myMessage(){
    alert("Hello Everyone");
}

function myMessage2(){
    alert("I am Button 2");
}

function myMessage3(){
    alert("I am Paragraph")
}

var myVar = document.querySelector("#para");

function myMessage() {

    myVar.innerHTML = "You Have clicked on button1";
}

function myMessage2(){

    myVar.innerHTML = "You Have clicked on button2";
}

//show Images

var myImg = document.querySelector("#myImage");
function myPicture1() {
    myImg.src =  "images/my .jpg";
}

function myPicture2() {
    myImg.src =  "images/my2.jpg";
}