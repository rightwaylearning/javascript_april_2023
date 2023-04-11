
function test(fun){
    return fun;
}

let data = test(function(){
    return "Hi hello";
});


let msg = data();

console.log(msg);