
function test(){
    //message
}

test();

let m=function(){
    //logic
}
m();
//function expression

function doSomething(){
    console.log(a+b);
}

function doSomething(a,b){
    console.log(a+b); 
}

let p1=10;
let p2=30;

doSomething(p1,p2);

//-----------------------------------------

function foo(f) {
    f();
}

// function lazy(){
//     console.log("I am a lazy function");
// }
// foo(lazy);
// OR
//here we are writing function as a argument directly
// foo(function lazy(){
//     console.log("I am lazy function");
// });
foo(function(){
      console.log("I am a lazy function");
});

foo(function(){
    console.log("I am new function")
});