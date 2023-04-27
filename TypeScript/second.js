var Student = /** @class */ (function () {
    function Student() {
        console.log("I am student constructor");
    }
    Student.prototype.viewData = function () {
        console.log(this.fisrtName);
        console.log(this.lastName);
        console.log(this.schoolName);
        console.log(this.rollNumber);
    };
    return Student;
}());
var ref = new Student();
ref.fisrtName = "Adam";
ref.lastName = "Julliate";
ref.rollNumber = 23;
ref.schoolName = "MG";
ref.viewData();
