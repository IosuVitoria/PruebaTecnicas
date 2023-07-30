function mostRepeatedVowel(string){
    let aCount = 0;
    let eCount = 0;
    let iCount = 0;
    let oCount = 0;
    let uCount = 0;

    //Hemos recopilado el conteo de todas las vocales.
    for(let i = 0; i <= string.length; i++){
        if (string[i]==="a" || string[i]==="á") 
        {
            aCount+=1
        }else if(string[i]==="e" || string[i]==="é")
        {
            eCount+=1
        }
        else if(string[i]==="i" || string[i]==="í")
        {
            iCount+=1
        }
        else if(string[i]==="o" || string[i]==="ó")
        {
            oCount+=1
        }
        else if(string[i]==="u" || string[i]==="ú")
        {
            uCount+=1
        }
        else{
            console.log("Esta vuelta no es una vocal.")
        }
    }
    
    //Ahora tenemos que ordenar para saber cuál es la vocal más repetida.
    let vowels = [{vocal:"a", cantidad: aCount}, {vocal:"e", cantidad: eCount}, {vocal:"i", cantidad: iCount}, {vocal:"o", cantidad: oCount}, {vocal:"u", cantidad: uCount}]
    // console.log(vowels);
    vowels.sort((a,b) => b.cantidad - a.cantidad);
    // console.log(vowels);
    console.log(`La vocal más repetida es: ${vowels[0].vocal} y está repetida un total de ${vowels[0].cantidad} veces.`)
}


mostRepeatedVowel("El auténtico poder de un monje reside en la capacidad de concentrarse.")