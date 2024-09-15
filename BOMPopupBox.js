//js BOM
// popup boxes - alert, confirm, prompt

// console.log(window);

// alert("error here");

// Uses of confirm box

// confirm("Are you sure..?");


// function deleteSomething() {
//   let value = confirm("Do you want to delete.?");
//   if (value) {
//     console.log("Deleted");
//   } else {
//     console.log("Not deleted");
//   }
// }

// deleteSomething()


// Uses of prompt  Box

function welcomeMessage() {

  var h1 = document.createElement('h1');
  let text;


  var name = prompt("Enter Your name: ");
  if(name == null || name == '') {
    text = 'no name found';
  } else {
    text = "welcome " + name;
  }

  var textNode = document.createTextNode(text);
  h1.appendChild(textNode);
  document.body.appendChild(h1);
}
welcomeMessage();