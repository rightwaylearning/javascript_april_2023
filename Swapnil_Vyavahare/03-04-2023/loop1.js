let arr=[
    {
        name:"Swapnil",
        age:24,
        salary:40000,
        phone:[4446464,4456456,48465]
    },
    {
        name:"Rohan",
        age:20,
        salary:20000,
        phone:[4446,484,49,688,44]
    },
    {
        name:"Sushant",
        age:21,
        salary:60000,
        phone:[14684,48464,487987]
    }
]



for(let i=0; i<arr.length;i++){
    console.log(arr[i].name)
    console.log(arr[i].age)
    console.log(arr[i].salary)

    for(let j=0; j<1; j++)
    console.log(arr[i].phone[j])
    
}

