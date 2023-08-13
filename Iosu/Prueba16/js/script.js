// const dados = () => {
//     let dado1 = Math.ceil(Math.random() * 6);
//     let dado2 = Math.ceil(Math.random() * 6);
//     console.log("Dado 1:", dado1);
//     console.log("Dado 2:", dado2);
//     return [dado1, dado2];
// }

// console.log(dados());

// const simularLanzamientos = (lanzamientos) => {
//     const resultados = [0, 0, 0, 0, 0, 0];
//     for (let i = 0; i < lanzamientos; i++) {
//         const resultadoDado = Math.ceil(Math.random() * 6);
//         resultados[resultadoDado - 1]++; 
//     }

//     for (let i = 0; i < 6; i++) {
//         const porcentaje = (resultados[i] / lanzamientos) * 100;
//         console.log(`Número ${i + 1}: ${resultados[i]} veces - ${porcentaje.toFixed(2)}%`);
//     }
//     return resultados
// }

// simularLanzamientos(10000); Idea inicial del proyecto, un simulador de dados.

//Previo se diseña una función que permita lanzar dos tiradas a la vez para aligerar la simulación.
const dados = () => {
    let dado1 = Math.ceil(Math.random() * 6);
    let dado2 = Math.ceil(Math.random() * 6);
    console.log("Dado 1:", dado1);
    console.log("Dado 2:", dado2);
    return [dado1, dado2];
}

//Para hacer el gráfico, primero se definen los colores que van a tomar las barras del gráfico.
//Los colores deben tener un formato rgba.
const coloresBarras = [
    'rgba(75, 192, 192, 0.6)',
    'rgba(255, 99, 132, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)'
];


// Función para calcular la media de probabilidad
const mediaProbabilidad = (lanzamientos) => {
    return (1 / 6) * 100;
};
console.log(mediaProbabilidad)

// Función para calcular el coeficiente de variación relativo
const calcularCoeficienteVariacionRelativo = (mediaEsperada, valorObtenido) => {
    return ((mediaEsperada - valorObtenido) / mediaEsperada) * 100;
};

document.getElementById('recargar').addEventListener('click', () => {
    location.reload();
});

//Se diseña un algoritmo que guarde la simulación de los lanzamientos que se han producido. Estos lanzamientos son condicionados por el select y serán los representados en el gráfico..
const simularLanzamientos = (lanzamientos) => {
    const resultados = [0, 0, 0, 0, 0, 0];
    
    for (let i = 0; i < lanzamientos; i++) {
        const [resultadoDado1, resultadoDado2] = dados();
        resultados[resultadoDado1 - 1]++;
        resultados[resultadoDado2 - 1]++;
    }

    for (let i = 0; i < 6; i++) {
        const porcentaje = (resultados[i] / (lanzamientos * 2)) * 100;
        console.log(`Número ${i + 1}: ${resultados[i]} veces - ${porcentaje.toFixed(2)}%`);
    }
    
    return resultados;
};

//Orden principal y último bloque en el diseño. Se captura el botón simular, se transforma en entero el valor de los lanzamientos y se simulan. Con el dato obtenido se captura el espacio designado para el gráfico y se genera la estructura del mismo que es posteriormente rellenada con los datos de la simulación.
document.getElementById('simular').addEventListener('click', () => {
    const lanzamientos = parseInt(document.getElementById('lanzamientos').value);
    const resultados = simularLanzamientos(lanzamientos);
    
    const mediaEsperada = mediaProbabilidad(lanzamientos);

    const probabilidadMediaElement = document.getElementById('probabilidad-media');
    probabilidadMediaElement.textContent = `Probabilidad media: ${mediaEsperada.toFixed(2)}%`;

    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                label: 'Nº veces que sale esta cara',
                data: resultados,
                backgroundColor: coloresBarras,
                borderColor: coloresBarras.map(color => color.replace('0.6', '1')),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const tablaResultados = document.getElementById('tabla-resultados');
    tablaResultados.innerHTML = `
        <tr>
            <th>Número</th>
            <th>Veces</th>
            <th>Porcentaje</th>
            <th>Coeficiente de Variación</th>
        </tr>
        ${resultados.map((veces, index) => {
            const porcentaje = (veces / (lanzamientos * 2)) * 100;
            const coeficienteVariacionRelativo = calcularCoeficienteVariacionRelativo(mediaEsperada, porcentaje);
            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${veces}</td>
                    <td>${porcentaje.toFixed(2)}%</td>
                    <td>${coeficienteVariacionRelativo.toFixed(2)}%</td>
                </tr>
            `;
        }).join('')}
    `;
});


