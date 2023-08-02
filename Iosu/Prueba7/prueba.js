function bisiestos(year){
    let finalYear = year + 30;
    for(let i = year; i<=finalYear; i++ ){
        if(i%4===0){
            console.log(`${i} es año bisiesto`)
        }else{
            console.log(`${i} no es año bisiesto`)
        }
    }
}

bisiestos(2023)