// BOM (Browser Object Model)
// window Object
// location Object

console.clear();
// console.log(window.location);

// //href
// console.log(location.href);

// //protocol

// console.log(location.protocol);

// //hostname
// console.log(location.hostname);

// //port
// console.log(location.port);

// //pathname
// console.log(location.pathname);

var locationDiv = document.querySelector(".location-div");
// console.log(locationDiv);

var p1 = locationDiv.children[0];
// console.log(p1);
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.protocol;

var p3 = locationDiv.children[2];
p3.textContent = location.hostname;

var p4 = locationDiv.children[3];
p4.textContent = location.port;

var p5 = locationDiv.children[4];
p5.textContent = location.pathname;

const visitButton = document.getElementById("visit-button");
visitButton.addEventListener("click", function () {
  location.assign("https://mobasherarefin.blogspot.com/")
});
