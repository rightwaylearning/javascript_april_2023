// ARRAY- array is collection of same data type.
// array is one data type.

let employee = [
    {
        id:21,
        name:"jyoti",
        age:18
      },{
        id:22,
        name:"chitra",
        age:20
      },{
        id:23,
        name:"Anshika",
        age:22
      },{
        id:24,
        name:"Ruhii",
        age:26
      }
];

for(let i=0; i<employee.length; i++){
    //console.log(employee[i]);
    //console.log(employee);
}

for(let i=0; i<employee.length; i++){
    console.log("id ="+employee[i].id);
    console.log("name ="+employee[i].name);
    console.log("age="+employee[i].age);
    console.log("----------------------------------------------------------------------------")
}