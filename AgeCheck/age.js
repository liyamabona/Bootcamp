function ageChecker(birthyear,currentyear){
    let Age = currentyear - birthyear           

    
if(Age < 0){
    console.log("age cannot be a nagetive")

}else if(!birthyear,!currentyear ){
    console.log("please enter your birthyear")
}else{
    console.log(Age)
}
}
ageChecker(2018,2023)