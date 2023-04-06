let images = [
    "https://www.cognizantsoftvision.com/wp-content/uploads/2018/12/coding-500x500.jpg",
    "https://spaar.com/wp-content/uploads/2021/08/planning.png",
    "https://www.shutterstock.com/image-vector/digital-binary-data-streaming-code-260nw-757319056.jpg",
]
let i = 0;

function next(){
let show = images[i];
    console.log(show);
    i = i ++;

}
next()
next()
next()

function previous(){
let show = images[i]
i = i -1;
i --
if(i<0){
    i= image.length-1;


}
}
