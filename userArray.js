
// Array 

var name1, name2, name3, name4,name5 ;

name1 = "Arefin";
name2 = "Anis";
name3 = "Wakil";
name4 = "Mobasher";
name5 = "Talha";

// console.log(name5);


// creating array 

var names = new Array(5);
names[0] = "Arefin";
names[1] = "Anis";
names[2] = "Wakil";
names[3] = "Mobasher";
names[4] = "Talha";

console.log(names[1])

// Another way of creating Array 

var names2 = ["Arefin", "Anis", "Wakil", "Mobasher", "Talha"];

names2.push("mofiz");

console.log(names2)

//concate array

var country1 =["Bangladesh","Nepal"];
var country2 =["India","Pakistan"];

var country = country1.concat(country2);
console.log(country);