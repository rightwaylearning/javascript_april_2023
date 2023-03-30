let students=["A", "B", "C", "D"]; // 4 0-3
for (i=0; i<students.length;i++){
    //console.log(students [i]);
}

let nums=[12,45,56,459,458,896,8563];
for(i=0; i<nums.length; i++){
   // console.log(nums[i]);
}

//----------------------------------------------------------
// bad practice 

let myArray = ["mahesh",56,true,undefined,null,{name:"json roy"}];

for(let i = 0; i<myArray.length;i++){
  // console.log(myArray[i]);
}

let employee=[
    {
        id:21,
        name:"A",
        age:40    
    },{
        id:23,
        name:"B",
        age:56 
    },{
        id:24,
        name:"C",
        age:58 
    },{
        id:25,
        name:"D",
        age:45 
    }
];

for(i=0; i<employee.length;i++){
   // console.log(employee[i]);
}

// console.log(employee);

for(i=0;i<employee.length;i++){
    console.log("id =" +employee[i].id);
    console.log("name =" +employee[i].name)
    console.log("age =" +employee[i].age)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>")
}