
let actor={
   name:"Akshay Kumar",
   age:55,
   birthPlace:"amritsar(punjab)",


   movies:[
    {
        name:"Phir Hera Pheri",
        year:2006,
        type:"Comedy",
        roleName:"raju"
    },{
        name:"Kesari",
        year:2019,
        type:"Historical",
        roleName:"Havildar Ishar Singh"
    },{
        name:"Mission Mangal",
        year:2019,
        type:"Technology",
        roleName:"Rakesh Dhawan"
    },{
        name:"Ram Setu",
        year:2022,
        type:"Historical",
        roleName:"Aryan Kulshrestha"
    }
]
}

console.log("-----------------------------------------Actor Name : "+actor.name+"-------------------------------");

  for(let i=0;i<actor.movies.length;i++){

    console.log("Movie Name : "+ actor.movies[i].name);
    console.log("Movie Year : "+ actor.movies[i].year);
    console.log("Movie Type : "+ actor.movies[i].type);
    console.log("Movie Character Name : "+ actor.movies[i].roleName);

    console.log("=====================================================================");
  };



