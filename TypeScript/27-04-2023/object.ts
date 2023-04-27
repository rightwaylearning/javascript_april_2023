/*
 1] object is primary concept in OOP
 2] object represent physical real life any item.
 3] every object have a properties & behaviours 

*/

// JavaScript 
// object = properties  + function
let student = {
    name:"Mahesh",
    age:23,
    class:"12th",
    marks:{
        marathi:78,
        english:67,
        maths:100
    },
    percentage:function(){
        let total = this.marks.marathi + this.marks.english + this.marks.maths;
        let percentage = (total/300)*100;
        console.log("Percentage = " + percentage);      
    }  
};

//-------------------- How to create object in typescript

class Employee{
   name:string;
   age:number;
   salary:number;

   employeeNature():void{
        console.log("I am cool");
   }

}

let ref1:Employee =  new Employee();

let ref2:Employee =  new Employee();

let ref3:Employee =  new Employee();



















