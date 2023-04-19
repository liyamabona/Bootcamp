function ageChecker(){
   
   sessionStorage.getItem("age")
   // Age = sessionStorage.getItem("age")
 
    let birthyear = document.getElementById("ageChecker").value
    let liya = new Date();
    let year = liya.getFullYear();

    let Age = (year - birthyear);

if(!birthyear){
   alert("please enter your birthyear !");
}else if(Age < 0){
   alert("age cannot be a negative");
}else if(birthyear < 0)
   alert("birthyear cannot be a negative")
else
   alert(Age);
   
   sessionStorage.setItem("age",(Age))
}

ageChecker()