function ageChecker(){

    let birthyear = document.getElementById("ageChecker").value
    let Age = 2023 -birthyear;

if(!birthyear){
   alert("please enter your birthyear !");
}else if(Age < 0){
   alert("age cannot be a negative");
}else if(birthyear < 0)
   alert("birthyear cannot be a negative")
else
   alert(Age);
}

ageChecker()