//Array DEstructur

let numbers = [10, 20, 30, 40, 50];
let  [num1, num2, num3, num4, num5] = numbers
let [numb1, numb2, ...z] = numbers
console.log(num1);
console.log(num2);
console.log(z)

//swap variables

let a=10, b=20;
[a,b] = [b,a]
console.log(a);
console.log(b);



//Object destructure

const studentInfo  = {
  id: 101,
  fullName: 'Mobasher Arefin',
  gap: 3.92

}

const {id, gap} = studentInfo

console.log(id)
console.log(gap)


//Nested Object Destructure

const studentInfo1  = {
  id: 101,
  fullName: 'Mobasher Arefin',
  gap: 3.92,
  language: {
    nativ : 'bangla',
    beginner : 'English'
  }

}

const {fullName, language} = studentInfo1


console.log(language)




//Destructuring Function Parameters


const StudentInfo = ({id, fullName}) => {
  console.log(`${id}, ${fullName}`)
}

const student = {
  id: 101,
  fullName: "Mobasher Arefin"
}

StudentInfo(student)
