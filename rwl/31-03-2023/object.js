

let student = {
   name:"Json roy",
   age:35,
   marks:[{
    subject:"Maths",
    score:89
   },{
    subject:"Eng",
    score:67
   },{
    subject:"Science",
    score:90
   }],
   calculatePercentage:function test(){
     let sum = 0
     for(let i =0 ; i < this.marks.length ; i++){
        sum = sum + this.marks[i].score;
     }
     console.log("percentage = " + sum/this.marks.length);
   }
};

student.calculatePercentage();
