// student Details

var name ="Mobasher Arefin";
var age = 24;
var cgpa = 4.00;

var lang = ["bengali", "Hindi", "English"];

// creating object 

// var student1 = {
//     name : "Arefin",
//     age : 24,
//     cgpa : 4.00,
//     lang : ["bengali", "Hindi", "English"]

// }

// var student2 = {
//     name : "Anis",
//     age : 27,
//     cgpa : 3.92,
//     lang : ["Bengali", "Urdu", "English"]

// }

// var student3 = {
//     name : "Mobasher",
//     age : 32,
//     cgpa : 2.92,
//     lang : ["Bengali", "Portuguese", "English"]

// }
// print the value of an object
// console.log(student2.name);


//  adding a constructor

function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
}

var student1 = new Student("Arefin", 24,4.00,["bengali", "Hindi", "English"]);
var student2 = new Student("Anis", 27,3.00,["bengali", "Portuguese", "English"]);
var student3 = new Student("Mobasher", 34,2.00,["bengali", "Urdu", "English"]);

console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.lang);