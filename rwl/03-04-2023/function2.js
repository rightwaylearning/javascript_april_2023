function test(a,b){
  return a + b;
}


let sum =  test(10,20);
console.log(sum);

// we can return variable also we can written function from function

function foo(a,b){

    // function sum(){
    //     console.log(a+b);
    // }
    // return sum;
    // OR
    // return function sum(){
    //     console.log(a+b);
    // }
    // OR
    return function(){
        console.log(a+b);
    }
    
}


 let output = foo(1000,200);

 output();







