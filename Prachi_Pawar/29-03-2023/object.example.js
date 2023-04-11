let person={};

console.log(person);
console.log(typeof person);
console.log(typeof {});

//output {} object object

// typeof is operator , we can pass value of variable as input it will return data type as output

//---------------------------------------

let address ={
    line1:"Sainagar Jalochi Road",
    line2 :"Bhigwan road baramati 413102",
    city :"Baramati",
};

let person_info = {
    firstName:"Abhishek",
    lastName :"wadghavnekar",
    age:25,
    Gender:"Male",
    address:address
};

console.log(person_info.address.city);
//   console.log(person_info);
//   console.log(person_info.firstName);
//------------------------------------------


