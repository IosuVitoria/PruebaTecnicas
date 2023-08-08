
function myDNIletter(number){
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X','B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let completeDNI = "";
    let result = number%23;
    let letter = letras[result];
    completeDNI = number + letter;
    return completeDNI;

}

console.log(myDNIletter(72752290));