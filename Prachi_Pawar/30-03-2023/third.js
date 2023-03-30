let actress={
    rollNumber:32,
    firstName:"Pooja Hegade",
    age :23,
    cellNumber:[9087654356,908765459,9876543245,9090908765],
    movies:[
        {
            name:"Housefull 4",
            year:2019,
            role:"Rajkumari Mala"
        },{
            name:"Mohenjo Daro",
            year:2016,
            role:"Chaani"
        },{
            name:"Radhe Shyam",
            year:2022,
            role:"Prerana"
        },{
            name:"Cirkus",
            year:2022,
            role:"Mala"
        }
    ]   
};

for(i=0;i<actress.movies.length;i++){
    console.log("name ="+actress.movies[i].name);
    console.log("year ="+actress.movies[i].year);
    console.log("role ="+actress.movies[i].role);
    console.log(">>>>>>>>>>>>>>>>>>>");
}