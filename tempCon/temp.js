// function cTf(fah){

// let celsius = (fah -32) * (9/5);

// if (celsius < 16 ) {

//     alert(celsius + "it is cold")
// }else if
// (celsius >= 16 && celsius <21){
//     alert(celsius + "it is warm,wear Tshirt and jrans")
// }else {
//      alert(celsius + "it is hot,wear shorts")
// }
// }
// cTf()
newArray = []
if(sessionStorage.getItem("M")){
    newArray = JSON.parse(sessionStorage.getItem("M"))
 }

function cTf(){
 
    sessionStorage.getItem("cTf")

    let fah =document.getElementById("cTf").value
    let feedback =document.getElementById("feedback")
    let celsius = (fah -32) * (5/9);
    feedback.innerHTML = celsius

    newArray.unshift(celsius)

    if(!fah){
        feedback.innerHTML =("please enter value")
    }
    else if(celsius <= -274.15){
        feedback.innerHTML =("it is absolute zero")
    }
    // if(celsius >0 ){
    //     // alert("please enter value")
    //     feedback.innerHTML =("please enter value")
    // }
    else if (celsius < 16 ){
        // alert(celsius + "" +  ",it is cold")
        feedback.innerHTML =(celsius + "" +  ",it is cold")
    } else if(celsius >= 16 && celsius <21){
        // alert(celsius + " "  +  ",wear Tshirt and jeans")
        feedback.innerHTML =(celsius + " "  +  ",wear Tshirt and jeans")
    } else {
        // alert(celsius + " "  +  "it is hot,wear shorts")
        feedback.innerHTML =(celsius + " "  +  "it is hot,wear shorts")

        sessionStorage.setItem("cTf",(celsius))
        array = document.getElementById("cTf").value
        newArray.push(array) 

        sessionStorage.setItem("M",JSON.stringify(newArray));

    }
    }
    // cTf()