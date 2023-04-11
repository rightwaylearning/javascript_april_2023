let student = {
    name: "Swapnil",
    age: 23,
    marks: [{
        subject: "Maths",
        score: 85
    }, {
        subject: 'physics',
        score: 85
    }, {
        subject: 'chemistry',
        score: 85
    }],
    calculatepercentage: function test() {
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++) {
            sum = sum + this.marks[i].score;
        }
        console.log("percentage = " + sum / this.marks.length);
    }
};
student.calculatepercentage();



