newArray = []

if(sessionStorage.getItem("h")){
   newArray = JSON.parse(sessionStorage.getItem("h"))
}

function ageChecker(){

   sessionStorage.getItem("age")
   // Age = sessionStorage.getItem("age")
 
    let birthyear = document.getElementById("ageChecker").value
    let liya = new Date();
    let year = liya.getFullYear();
    let Age = (year - birthyear);
    
    newArray.unshift(Age)
   // nextArray.push(Age)


if(!birthyear){
   alert("please enter your birthyear !");
}else if(Age < 0){
   alert("age cannot be a negative");
}else if(birthyear < 0)
   alert("birthyear cannot be a negative")
else
   alert(Age);
   
   sessionStorage.setItem("age",(Age))

   array = document.getElementById("ageChecker").value
   newArray.push(array) 

   sessionStorage.setItem("h",JSON.stringify(newArray));
}

ageChecker()