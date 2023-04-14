function test(fun){
return fun;
}

let data = test(function(){
return "Hii Hello";

});

let msg = data();
console.log(msg);

//function = normal variable i.e function is first class citizen.