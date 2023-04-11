let students = ["A","B","C","D"]; // 4  >> 0-3

for(let i=0; i<students.length; i++){
   // console.log(students[i]);
}

let nums= [12,34,56,78,90,233,456,78];

for(let i=0; i<nums.length; i++){
   // console.log(nums[i]);
}

//----------------------------------------------------------
// bad practice 
let myArray = ["mahesh",56,true,undefined,null,{name:"json roy"}];

for(let i = 0; i<myArray.length;i++){
  //  console.log(myArray[i]);
}

let employee = [
    {
        id:23,
        name:"A",
        age:45
    },{
        id:24,
        name:"B",
        age:56
    },{
        id:25,
        name:"C",
        age:28
    },{
        id:26,
        name:"D",
        age:32
    }
];

for(let i =0 ;i< employee.length; i++){
  //   console.log(employee[i]);
}

//console.log(employee);

for(let i =0 ;i< employee.length; i++){
       console.log("id = "+employee[i].id);
       console.log("name= "+employee[i].name);
       console.log("age= "+employee[i].age);
       console.log("----------------------------------------");
  }










