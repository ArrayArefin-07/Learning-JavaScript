
var myVar = document.querySelector("#para2Id");

function addStyle() {

    // myVar.style.color = "red";
    // myVar.style.fontSize  = "3rem";
    // myVar.style.fontWeight ="bold";
    // myVar.style.fontStyle = "italic";

    // changing paragraph using css class 
    myVar.classList.add("para-style");
}

function removeStyle() {
    myVar.classList.remove("para-style");
}