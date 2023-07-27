function calcularImc() {
    //Obtener los datos del usuario
    const name = document.getElementById('name').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    //Capturar que se hayan metido en el formulario datos adecuados.
    if (isNaN(weight) || isNaN(height)) {
        alert('Por favor, ingrese valores numéricos válidos para peso y altura.');
        return;
    }

    //Calcular índice de masa corporal.

    const bmi = weight / (height * height);

    //Mostrar la información deseada en función del resultado obtenido.
    let resultadoText;
    let imageSrc;

    if (bmi < 18.5) {
        resultadoText = `${name} tienes bajo peso.`;
        imageSrc = "./assets/imagen1.png";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultadoText = `${name} tienes peso normal.`;
        imageSrc = "./assets/imagen2.png";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultadoText = `${name} tienes sobrepeso.`;
        imageSrc = "./assets/imagen3.png";
    } else if (bmi >= 30 && bmi < 34.9){
        resultadoText = `${name} tienes obesidad tipo I`;
        imageSrc = "./assets/imagen4.png";
    }else{
        resultadoText = `${name} tienes obesidad tipo II`;
        imageSrc = "./assets/imagen5.png";
    }

    document.getElementById('resultado').value = `${resultadoText} (${bmi.toFixed(2)})`;
    document.getElementById('resultImage').src = imageSrc;

    // Borrar recomendaciones previas.
    const recomendacionesList = document.getElementById('recomendacionesList');
    recomendacionesList.innerHTML = '';

    // Agregar recomendaciones en funcion del IMC/BMI calculado)
    if (bmi < 18.5) {
        const recommendation = document.createElement('li');
        recommendation.textContent = 'Recomendación para bajo peso: Aumentar la ingesta calórica y llevar una dieta equilibrada. Evitar la realización de ejercicio físico intenso y pasar a hacer fuerza para ganar masa muscular.';
        recomendacionesList.appendChild(recommendation);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        const recommendation = document.createElement('li');
        recommendation.textContent = 'Recomendación para normopeso. Mantenga una actividad física variada y una dieta variada. Lo hace muy bien.';
        recomendacionesList.appendChild(recommendation);
    } else if (bmi >= 25) {
        const recommendation = document.createElement('li');
        recommendation.textContent = 'Recomendación para sobrepeso u obesidad: Reducir la ingesta calórica y aumentar la actividad física. Si estamos ante obesidad de tipo I o II consultar con un médico para dieta y ejercicios adecuados.';
        recomendacionesList.appendChild(recommendation);
    }
}

//Capturar el formulario Inicial.
document.getElementById('formImc').addEventListener('submit', function(event) {
    event.preventDefault(); 
    calcularImc();
});
