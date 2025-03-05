import React from "react";

function CustomGreet(){
    const date =new Date();
    var greeting;
    var time = date.getHours();
    var txtcolor = {color: "red"}
    
    
    if(time < 12){
        greeting = "Morning";
        txtcolor.color = "red";
    }else if(time < 18){
        greeting = "Afternoon";
        txtcolor.color = "green";
    } else{
        greeting = "Evening";
        txtcolor.color = "blue";
    }
    return [greeting, txtcolor];
}

export default CustomGreet;