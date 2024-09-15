// JS BOM 
// JS Timing event methods 
// setTimeout(), setInterval()


// Uses of setTimeout function

// setTimeout(() => {
//   console.log("Hello, World!");
// }, 5000);



// setTimeout(display, 2000);

// function display() {
//   console.log("display function");
// }

// Uses of setTimeout function like real example using button

const saveButton = document.querySelector(".save-button");
const message = document.querySelector(".message");

// saveButton.addEventListener("click", saveUser);

// function saveUser() {
//   message.textContent = "User Registration Successfully";

//   setTimeout(() => {
//     message.textContent = "";
//   }, 2000)
// }



// USes of setInterval() Function 

saveButton.addEventListener('click', displayCount);
function displayCount(){
  let count = 0;
  message.textContent = count;

  setInterval(() => {
    count++;
    message.textContent = count;
  }, 1000);
}