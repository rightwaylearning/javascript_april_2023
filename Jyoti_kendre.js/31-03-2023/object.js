
let student = {
    name: "jyoti",
    age: 23,
    marks: [{
        subject: "Maths",
        score:80
    },{
        subject: "Algebra",
        scroe:90
    },{
        subject: "Sanskrit",
        score:95
    },{
        subject: "Histry",
        score:70
    }],
    calculatePercentage:function(){
        let sum = 0
        for(let i=0; i<this.marks.length; i++){
            sum = sum + this.marks[i].score;
        }
        console.log("percentage =" + sum/this.marks.length);

    }  
};
student.calculatePercentage();