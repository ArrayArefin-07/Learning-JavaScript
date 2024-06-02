// alert("Hello")
var num = 20;
var num2 = "25";
var num3 = "30.33"
var num4 = 3.14167236;

//covert a number to string using toString Function
num = toString(num)
num2 = parseInt(num2)
num3 = parseFloat(num3)

console.log(typeof(num));
console.log(typeof(num2));
console.log(typeof(num3));

console.log(num4.toFixed(3))
console.log(num4.toPrecision(2))

console.log(typeof(Number("123")))
console.log(typeof(Number("123.5698")))
// console.log()

// document.write("Mobasher"+ "Arefin");

var firstName = "Mobasher";
var lastName = "Arefin";

var fullName = firstName + lastName;
document.write("my Name is" + fullName);

// var text = "Bangladesh";
// var text = prompt("Enter Your Name: ");

document.write("<br/> Number of character " + text.length);

var text2 = "Bangladesh";
document.write("<br/>" + text2.charAt(2));
text2 = text2.toUpperCase();
text3 = text2.toLowerCase();
document.write("<br/>" + text2);
document.write("<br/>" + text3 + "<br/>");

//concat function
var t1 = "Bangladesh ";
var t2 = "is beautiful";

document.write(t1.concat(t2))
document.write("<br/> <h1> Hello, Toky Bodmais Dushto Valo Na...! <h1/>");
document.write("<br/> <h1> Hello, Talha bhiya Valo ...! <h1/>");
document.write("<br/>"+ t1.slice(2,5));


// get first name from user
// get last name from user 
// add without using library function
// print full name 
// total length off  full  name 
// convert full name into uppercase 
// print the 2nd position from fuyll name 


document.write(prompt(fName))
var fName = prompt("Enter your First Name:");

var lName = prompt("Enter your Last Name: ");

var firstName = fName;
var lastName = lName;

document.write("Your First Name is "+ firstName +"br>");
document.write("Your last Name is "+ lastName+ "br>");
document.write("Your Full Name is "+ firstName + lastName);


// Prompt the user for their first name
let firstName = prompt("Enter your first name:");

// Prompt the user for their last name
let lastName = prompt("Enter your last name:");

// Concatenate first name and last name to get the full name
let fullName = firstName + " " + lastName;

// Calculate the total length of the full name
let fullNameLength = fullName.length;

// Convert the full name to uppercase
let fullNameUpperCase = fullName.toUpperCase();

// Get the character at the 2nd position (index 1, considering 0-based indexing)
let secondPositionChar = fullName[1];

// Print the full name
console.log("Full Name:", fullName);

// Print the total length of the full name
console.log("Total Length of Full Name:");

