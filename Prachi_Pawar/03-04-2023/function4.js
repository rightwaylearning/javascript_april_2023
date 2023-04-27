function test(fun){
    return fun;
}

let data= test (function(){
     console.log("Hi hello");
});

let msg= data();

console.log(msg);