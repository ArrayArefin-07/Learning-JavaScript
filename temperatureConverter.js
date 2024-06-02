//fahrenheit  to celcius

var farn = prompt("Enter Fahrenheit ");

var cels = (farn - 32) * (5/9);

document.write("Celsius = " , cels , "<br/>");

// Celcious to fahrenheit  

var inCels = prompt("Enter Celcious ");

var resFarn = (inCels*(9/5)) + 32 ;

document.write("Fahrenheit = ", resFarn);