/*let array = [1,2,3,4,5,6,7,8]

array.pop()
array.push(8)
array.shift()
array.unshift(1)


console.log(array)
*/

let array = [20,311,12,11,13,15,9,4,0,10]

let even = Array();
let odd = Array();

for(let a = 0;a<array.length;a++){
    if (array[a] % 2 ==0){
        even.push(array[a]);
    }
    else{
        odd.push(array[a]);
    }
}
    console.log(even)


    console.log(odd)
