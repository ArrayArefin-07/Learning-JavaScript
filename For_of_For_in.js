//Uses of for of
const names = ["s1", "s2", "s3"]
for(let name of names){
  console.log(name)
}

let students = {
  ID : 101,
  name : 'Mobasher Arefin',
  cgpa : 3.91 
}

for(let x in students){
  console.log(x);
  console.log(students[x])
}