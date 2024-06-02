// var num = 5;

// if (num % 2 ==0)
//     console.log("Even");

// if (num % 2 != 0)
//     console.log("Odd");

// //latter grade 

// var mark = parseInt(prompt("Enter Your Subject Marks: "));

// if (mark > 100 || mark <= 0)
//   document.write("Invalid Marks"); 
// else if (mark >= 80 && mark <= 100) 
//   document.write("You Got ", mark, " Your Grade is A+");
// else if (mark >= 70 && mark <= 79)  // Use >= 70 for A-
//   document.write("You Got ", mark, " Your Grade is A- ");
// else if (mark >= 60 && mark <= 69)  // Use >= 60 for B+
//   document.write("You Got ", mark, " Your Grade is B+");
// else if (mark >= 50 && mark <= 59)  // Use >= 50 for B-
//   document.write("You Got ", mark, " Your Grade is B- ");
// else if (mark >= 40 && mark <= 49)  // Use >= 40 for C+
//   document.write("You Got ", mark, " Your Grade is C+");
// else if (mark >= 33 && mark <= 39)  // Use >= 33 for C-
//   document.write("You Got ", mark, " Your Grade is C- ");
// else 
//   document.write("You Got ", mark, " Your Grade is F <br/>");


// // Grater number 

// var num1 = prompt("Enter Number 1 :");
// var num2 = prompt("Enter Number 2 :");
// var num3 = prompt("Enter Number 3 :");

// if (num1> num2 && num1 > num3)
//   document.write(" <br/> Large number = ", num1);

// else if (num2 > num1 && num2 > num3)
//   document.write("Large number = ", num2);

// else if (num3 > num1 && num3 > num2)
//   document.write("Large number = ", num3);

// else 
// document.write("All Number are Equal");


// Vowel  or Consonant 

// var letter = prompt("Enter a letter : ");
// letter = letter.toLocaleLowerCase();

// if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
//   document.write("Vowel");

// else 
// document.write("Consonant");

// digit spelling 
// 0 - Zero , 1 - One ...... 9 - Nine - Not a valid digit

var digit = prompt("Enter any digit : ");

// if (digit == 0)
//   document.write("Zero");
// else if (digit == 1)
//   document.write("One");
// else if (digit == 2)
//   document.write("Two");
// else if (digit == 3)
//   document.write("Three");
// else if (digit == 4)
//   document.write("Four");
// else if (digit == 5)
//   document.write("Five");
// else if (digit == 6)
//   document.write("Six");
// else if (digit == 7)
//   document.write("Seven");
// else if (digit == 8)
//   document.write("Eight");
// else if (digit == 9)
//   document.write("Nine");

// else 
// document.write("Not a valid digit");

// using switch, case, breal, default 

switch(digit){
   case "0" : 
      document.write("Zero");
      break;
   case "1" : 
      document.write("One");
      break;
   case "2" : 
      document.write("Two");
      break;
   case "3" : 
      document.write("Three");
      break;
   case "4" : 
      document.write("Four");
      break;
   case "5" : 
      document.write("Five");
      break;
   case "6" : 
      document.write("Six");
      break;
   case "7" : 
      document.write("Seven");
      break;
   case "8" : 
      document.write("Eight");
      break;
   case "9" : 
      document.write("Nine");
      break;
   default:
      document.write("Not a valid digit");

}