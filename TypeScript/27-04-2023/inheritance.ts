class P{
   num:number;
   fisrtName:String
   constructor(){
    this.num = 23;
    this.fisrtName = "Json";
    console.log("I am Parent class constrcutor")
   }
}

class C extends P {
     m:number;
     n:number;

     constructor(){
        super();
        this.m =34;
        this.n =100;
        console.log("I am child class constrcutor")
     }

}

function main(){
   let c:C = new C();
  console.log(c.fisrtName);
  console.log(c.m);
}

main();