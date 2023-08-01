function calcularResultado() {
    const form = document.getElementById("quizForm");
    const imgResults = document.getElementById("img__cambio");
    const radios = form.querySelectorAll('input[type="radio"]:checked');
    //Interesante: Buscado como selecionar de un formulario todos los elementos radio que se encuentren marcados por el usuario.
    let puntos = 0;

    // Suma los puntos de las respuestas seleccionadas. Se suma la propiedad value que se encuentra parseada en la línea de código anterior.
    radios.forEach(radio => {
        puntos += parseInt(radio.value);
        //puntos = puntos + parseInt(radio.value)
    });

    // Almaceno aquí los resultados posibles y las rutas para cambiar la imagen en función del resultado del usuario.
    const resultados = {
        jedi: {
            minPuntos: 8,
            maxPuntos: 13,
            mensaje: "Eres un Jedi. Tu sabiduría y compasión guían tus acciones.",
            imagen: "./assets/jedi.jpg"
        },
        mandaloriano: {
            minPuntos: 14,
            maxPuntos: 18,
            mensaje: "Eres un Mandaloriano. Tu destreza en combate es incomparable.",
            imagen: "./assets/mandalorian.jpg"
        },
        sith: {
            minPuntos: 19,
            maxPuntos: 24,
            mensaje: "Eres un Sith. Tu sed de poder te impulsa hacia el lado oscuro.",
            imagen: "./assets/sith.jpg"
        }
    };

    // Se determina la respuesta y visualización de la misma en este trozo de código.
    let resultado = "";
    let tipoJedi = "";
    for (const [tipo, data] of Object.entries(resultados)) {
        //Accedemos a los datos del objeto usando la metodología del punto.
        if (puntos >= data.minPuntos && puntos <= data.maxPuntos) {
            resultado = data.mensaje;
            tipoJedi = tipo;
            imgResults.src = data.imagen;
            break;
        }
    }

    // Muestra el resultado
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Resultado:</h2><p>" + resultado + "</p>";
}
