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

    let fah =(document.getElementById("cTf").value)
    let celsius = (fah -32) * (5/9);

    if (celsius < 16 ){
        alert(celsius + "it is cold")
    } else if(celsius >= 16 && celsius <21){
        alert(celsius + " "  +  "it is warm,wear Tshirt and jeans")
    } else {

        alert
        (celsius + " "  +  "it is hot,wear shorts")
    }
    }
    // cTf()