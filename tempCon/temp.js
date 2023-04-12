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

function cTf(){

    let fah =document.getElementById("cTf").value
    let feedback =document.getElementById("feedback")
    let celsius = (fah -32) * (5/9);
    feedback.innerHTML = celsius


    if(!fah){
    feedback.innerHTML =("please enter value")
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
    }
    }
    // cTf()