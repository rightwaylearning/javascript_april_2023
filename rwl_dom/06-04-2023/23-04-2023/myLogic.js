document.getElementById("bt1").addEventListener("click",function(){
    console.log(event);
    let msg = document.getElementById("text1").value; 
    
    if(msg.length == 0){
        alert("Please !! enter some message");
    }else{
        
        let str = location.href;
        if(str.includes("first")){
            document.getElementById("id1").innerHTML = msg;
        }else{
            document.getElementById("id1").innerHTML = "Message "+msg;
        }
    }
 })

 document.getElementById("bt2").addEventListener("click",function(){
     document.getElementById("text1").value ='';
 });