
function suma(array, size){
    let result = 0;
    for(let i = 0; i < size; i++){
        result += array[i];
    }

    return result;
}

let val = [10,25,69,85,67,45,52,255,125];

console.log(`ingresando los siguientes valores ${val}`);
let res = suma(val,9);
console.log(`el resultado es: ${res}`);