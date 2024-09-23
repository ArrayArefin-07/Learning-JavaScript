//Module
import { text, setText } from './myModule.js';

console.log(text);

//useing function from module 
setText("goodbye From ES6 ");
console.log(text)


//class

//Create a class
class Student {
  constructor(id, name){
    this.id = id;
    this.name = name;
  }

  //set method/function
  set studentName(name){
    this.name = name;
  }

  //get method/function
  get studentInfo(){
    return this.id + " " + this.name;
  }

}

//Create a object of the decleared class

let s1 = new Student(101, "Mobasher")
console.log(s1)
console.log(s1.id);
console.log(s1.name);

//call set method
s1.studentName = "Arefin";
console.log(s1.name)

//call get method
console.log(s1.studentInfo)