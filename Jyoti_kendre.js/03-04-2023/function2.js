function test(a,b){
    return a+b;
}

let sum = test(100,200);
console.log(sum);

//we can return variable also we can written form function

function foo(a,b){
    function sum(){
        console.log(a+b);
    }
    return sum;
}