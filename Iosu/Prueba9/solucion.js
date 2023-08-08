
function sumarPares(array){
    let suma = 0;
    let long = array.length;
    // console.log("Esta es la primera impresión")
    // console.log(long);
    for(let i = 0; i < long; i++){
        // console.log("Aquí entro")
        if(i%2 === 0){
            // console.log(i);
            suma+=i;
        }
    }
    return suma;
}

let miArray = [1,2,3,4,5,6,7,8,9,10];
// console.log(miArray.length);
console.log(sumarPares(miArray));