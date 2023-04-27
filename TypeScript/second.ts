class Student{

     public rollNumber:number;
     public fisrtName:string;
     public lastName:string;
     public schoolName:string;

     constructor(){
        console.log("I am student constructor");
     }

     public viewData():void{
        console.log(this.fisrtName);
        console.log(this.lastName);
        console.log(this.schoolName);
        console.log(this.rollNumber);
     }

}

let ref= new Student();
ref.fisrtName = "Adam";
ref.lastName ="Julliate";
ref.rollNumber = 23;
ref.schoolName = "MG";

ref.viewData();

