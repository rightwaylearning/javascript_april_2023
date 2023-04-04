function test(){
    //message
}

test();

let m= function(){}

m();


function dosomething(a,b){
    console.log(a+b);
}

let p1=20;
let p2 =30;

dosomething(p1,p2);

function foo(f){
    f();
}

 foo(function(){
    console.log("I am lazy function")
 })

 foo(function(){
    console.log("I am lazy function")
 })