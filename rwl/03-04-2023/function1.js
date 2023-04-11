
function test(){
    // message
}
test();
// function

let m = function(){
    // logic
}
m();
// function expression
//------------------------------------------------------------------------

function doSomething(a,b){
  console.log(a+b);
}

let p1 = 20;
let p2 = 30;
doSomething(p1,p2);

//----------------------------------------------------------------

function foo(f){
   f();
}

// function lazy(){
//     console.log("I am lazy function");
// }
// foo(lazy);
// OR

// here we wriiting function as argument directly
// foo(function lazy(){
//     console.log("I am lazy function");
// });

foo(function(){
    console.log("I am lazy function");
});

foo(function(){
    console.log("I am new function");
});

















