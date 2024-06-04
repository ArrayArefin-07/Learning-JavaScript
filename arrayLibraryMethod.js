
//shift method


var names = ["Z","Arefin", "Anis", "wakil", ];

console.log(names);

// shift is opposit of pop

names.shift();
console.log(names);

// Unshift opossit of push
names.unshift("Mobasher");
console.log(names);


//Splice Method ---------

// adding element using splice
names.splice(2,0,"Karim","Rahim");
console.log(names);


// removing element using splice 
names.splice(1,2);
console.log(names)


// Slice method --------- Alphabetic sort

var newArray = names.slice(1);
console.log(newArray);

// Sort Method --------

var sortedNames = names.sort();
console.log(sortedNames);

//reverse sort 

names.reverse();
console.log(sortedNames);

// Number Sort 

var numbers = [20, 5, 25, 45, 1];
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers);

// Number Sort Reverse 

numbers.sort(function(a,b){
    return b-a;
});
console.log(numbers)