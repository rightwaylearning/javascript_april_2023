
let student={
    name:"Amar",
    age: 24,
    marks:[{
        Subject:"Maths",
        Score:87
    },{
        Subject:"Science",
         Score:90
    },{
        Subject:"English",
        Score:85 
    }],
    calculatePercentage:function test(){
        let sum=0;
        for(let i=0;i<this.marks.length;i++){
            sum =sum + this.marks[i].Score;    
        }
        console.log("percentage ="+sum/this.marks.length);
    }
};
 student.calculatePercentage();