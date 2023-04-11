let images = [
    "https://images.unsplash.com/photo-1681105192375-aadb6e706216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=6",
    "https://spaar.com/wp-content/uploads/2021/08/planning.png",
    "https://www.shutterstock.com/image-vector/digital-binary-data-streaming-code-260nw-757319056.jpg",
]
let i = 0;
image = document.getElementById("img")

function next(){
// let show = images[i];
i ++;
if(i >= images.length){
    i = 0;
}
image.src = images[i]
// console.log(show);
}

function previous(){
i --;
if(i <0){i = images.length -1}
image.src = images[i]
}
// next()
// next()
// next()

// function previous(){
// let show = images[i]
// i = i -1;
// i --
// if(i<0){
//     i= image.length-1;

// }
