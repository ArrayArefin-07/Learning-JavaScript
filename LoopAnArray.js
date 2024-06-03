  var num = [10, 20, 30, 40, 50];

  console.log(num[0]);
  console.log(num[1]);
  console.log(num[2]);
  console.log(num[3]);
  console.log(num[4]);
 
  //using loop 
  for (var i = 0; i < 5; i++){
    console.log(num[i]);
    sum = sum + num[i];
  }

  console.log("Sum = " + sum)

  // Taking user input

  var num2 = new Array();

  for(var i = 0; i < 5; i++){
    num2[i] = parseInt(prompt("Enter a Number : "));
  }

  var sum =0;

  for (var i = 0; i < 5; i++){
    console.log(num2[i]);
    sum = sum + num2[i];
  }

  console.log("Sum = " + sum)