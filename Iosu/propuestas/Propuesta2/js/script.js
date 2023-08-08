
// function muestraDigimons(digimons) {
//     const wsDigimons = new Promise((resolve) => {
//         const ws = new Worker("./componets/wsMyDigimons.js", {type: "module"});
//         let id = [];
//         let count = 0;
//         ws.postMessage({module:"displayDigimons", data: digimons}) 
//         id = [".digimons"]
//         ws.addEventListener("message", (e)=>{
//             let doc = new DOMParser().parseFromString(e.data, "text/html");
//             document.querySelector(id[count]).append(...doc.body.children);
//             (id.length-1==0) ? ws.terminate(): count++;
//         if (count == 2) {
//             resolve();
//           }  
//         });
                  
//     });
//     wsDigimons.then(() => {
 
//     });
// }
// export default{
//     showInterfazDigimons(){
//         async function getDigimons(){
            
//             const url = 'digi-api.com/api/v1/digimon';
//             try {
//                 const response = await fetch(url);
//                 let result = await response.json();
//                 console.log(response.json)
//                 result = result.slice(0, 51);
//                 result.forEach(val => {
//                     muestraDigimons(val) 
//                 });      
//                 console.log(result);
//             } catch (error) {
//                 console.error(error);
//             }
//         }

//         getDigimons();
//         }
//     }


// URL del recurso al que deseamos hacer la solicitud.
const url = 'https://digi-api.com/api/v1/digimon';

// Hacemos la solicitud fetch.
function obtenerDigimon(){
    fetch(url)
  .then(response => {
    // El servidor respondió. Verificamos si hubo un error de red o si se recibió un status 4xx o 5xx.
    if (!response.ok) {
      throw new Error('Error en la solicitud. Status: ' + response.status);
    }
    // Convertimos la respuesta a formato JSON.
    console.log(response.json)
    return response.json();
  })
  .then(dataDigimon => {
    // Manejamos los datos recibidos en formato JSON.
    console.log(dataDigimon);
  })
  .catch(error => {
    // Manejamos errores en caso de que algo falle en el proceso.
    console.error('Error en la solicitud:', error);
  });


}

obtenerDigimon()