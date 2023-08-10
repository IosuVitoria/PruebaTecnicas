document.addEventListener("DOMContentLoaded", function () {
    const plantInfo = [
        {
            name: "Lavanda",
            scientificName: "Lavandula angustifolia",
            description: "La lavanda es una planta aromática conocida por sus flores moradas y su agradable fragancia. Se encuentra comúnmente en regiones mediterráneas y se cultiva en jardines y campos.",
            uses: "Aromaterapia, aceites esenciales, productos de cuidado personal.",
            location: "Europa, Asia",
            imageUrl: "images/Lavanda.jpg"
        },
        {
            name: "Albahaca",
            scientificName: "Ocimum basilicum",
            description: "La albahaca es una hierba popular en la cocina mediterránea. Su aroma y sabor únicos lo hacen esencial para platos como la pasta al pesto. Se cultiva en muchas partes del mundo con climas cálidos.",
            uses: "Cocina, medicina herbal.",
            location: "Asia tropical, África",
            imageUrl: "images/albahaca.webp"
        },
        {
            name: "Aloe Vera",
            scientificName: "Aloe vera",
            description: "El aloe vera es una planta suculenta conocida por sus propiedades curativas para la piel. Se cultiva en climas cálidos y se encuentra en muchas regiones tropicales y subtropicales.",
            uses: "Cuidado de la piel, tratamientos naturales.",
            location: "África, Asia tropical",
            imageUrl: "images/Aloo.jpg"
        },
        {
            name: "Menta",
            scientificName: "Mentha spp.",
            description: "La menta es una hierba aromática ampliamente utilizada en tés, postres y cócteles. Se cultiva en diversas regiones y se adapta bien a diferentes climas.",
            uses: "Tés, postres, cócteles, salud digestiva.",
            location: "Europa, América del Norte",
            imageUrl: "images/Menta.jpg"
        },
        {
            name: "Romero",
            scientificName: "Rosmarinus officinalis",
            description: "El romero es una hierba fragante que se utiliza en la cocina para realzar el sabor de los platos. Se cultiva en climas mediterráneos y templados.",
            uses: "Cocina, propiedades antioxidantes.",
            location: "Europa, África del Norte",
            imageUrl: "images/Romero.jpg"
        },
        {
            name: "Caléndula",
            scientificName: "Calendula officinalis",
            description: "La caléndula es una planta ornamental con flores vibrantes que se utiliza en productos de cuidado de la piel debido a sus propiedades antiinflamatorias y calmantes. Se cultiva en jardines y campos.",
            uses: "Cuidado de la piel, productos naturales.",
            location: "Europa, Asia",
            imageUrl: "images/calendula.jpg"
        },
        {
            name: "Orégano",
            scientificName: "Origanum vulgare",
            description: "El orégano es una hierba esencial en la cocina mediterránea y se utiliza en una variedad de platos. Se encuentra en regiones de clima templado y se cultiva en jardines y macetas.",
            uses: "Cocina, propiedades antimicrobianas.",
            location: "Europa, Asia",
            imageUrl: "images/oregano.jpg"
        },
        {
            name: "Jazmín",
            scientificName: "Jasminum spp.",
            description: "El jazmín es una planta trepadora conocida por sus flores fragantes y hermosas. Se utiliza en la fabricación de perfumes y puede tener propiedades relajantes. Se cultiva en regiones tropicales y templadas.",
            uses: "Perfumería, relajación.",
            location: "Asia tropical, América del Sur",
            imageUrl: "images/jazmin.jpg"
        },
        {
            name: "Manzanilla",
            scientificName: "Matricaria chamomilla",
            description: "La manzanilla es una hierba popular para hacer infusiones relajantes. Se cree que tiene propiedades calmantes y puede ayudar con problemas digestivos. Se cultiva en diferentes partes del mundo.",
            uses: "Infusiones, relajación, salud digestiva.",
            location: "Europa, Asia",
            imageUrl: "images/manzanilla.jpg"
        },
        {
            name: "Cúrcuma",
            scientificName: "Curcuma longa",
            description: "La cúrcuma es una especia amarilla con propiedades antioxidantes y antiinflamatorias. Se utiliza en la cocina y en remedios naturales para la salud. Se cultiva en regiones tropicales.",
            uses: "Cocina, remedios naturales.",
            location: "Asia tropical",
            imageUrl: "images/curcuma.jpg"
        },
        {
            name: "Lirio",
            scientificName: "Lilium spp.",
            description: "El lirio es una planta ornamental apreciada por sus hermosas flores. En algunas culturas, también tiene significados simbólicos y religiosos. Se cultiva en jardines y paisajes ornamentales.",
            uses: "Ornamental, simbolismo.",
            location: "Europa, Asia",
            imageUrl: "images/lirio.jpg"
        },
        {
            name: "Eucalipto",
            scientificName: "Eucalyptus spp.",
            description: "El eucalipto es un árbol conocido por su aceite esencial, que se utiliza en productos para el alivio de la congestión y la tos. También se puede usar en saunas y tratamientos respiratorios. Tiene propiedades antimicrobianas y antiinflamatorias.",
            uses: "Alivio de la congestión, aceites esenciales.",
            location: "Australia, Oceanía",
            imageUrl: "images/eucalipto.jpg"
        },
    ];
    

//     const galleryMain = document.querySelector(".gallery-main");
//     const filterInput = document.querySelector(".filter-input");

//     // Genera las figuras de las plantas y agrega eventos
//     plantInfo.forEach(plant => {
//         const figure = document.createElement("figure");
//         figure.className = "gallery-element";
//         const link = document.createElement("a");
//         link.href = "#"; // Enlace temporal para demostrar el clic
//         const image = document.createElement("img");
//         image.src = plant.imageUrl;
//         image.alt = plant.name;
//         const figcaption = document.createElement("figcaption");
//         figcaption.innerHTML = `<h1>${plant.name}</h1>`;
//         figcaption.classList.add("details");

//         // Agrega evento clic para mostrar detalles
//         link.addEventListener("click", function () {
//             const detailsHtml = `
//                 <p>Nombre científico: ${plant.scientificName}</p>
//                 <p>Localización: ${plant.location}</p>
//                 <p>Datos sobre la especie: ${plant.description}</p>
//                 <button class="close-button">Cerrar</button>
//             `;
//             figcaption.innerHTML = detailsHtml;

//             const closeButton = figcaption.querySelector(".close-button");
//             closeButton.addEventListener("click", function () {
//                 figcaption.innerHTML = `<h1>${plant.name}</h1>`;
//             });
//         });

//         link.appendChild(image);
//         link.appendChild(figcaption);
//         figure.appendChild(link);
//         galleryMain.appendChild(figure);
//     });

//     // Agregar filtro de búsqueda en la parte superior
//     filterInput.addEventListener("input", function () {
//         const searchTerm = filterInput.value.toLowerCase();
//         plantInfo.forEach(plant => {
//             const figure = galleryMain.querySelector(`[alt="${plant.name}"]`).parentNode.parentNode;
//             if (plant.name.toLowerCase().includes(searchTerm)) {
//                 figure.style.display = "block";
//             } else {
//                 figure.style.display = "none";
//             }
//         });
//     });
// });

const galleryMain = document.querySelector(".gallery-main");
const filterInput = document.querySelector(".filter-input");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

const plantsPerPage = 6;
let currentPage = 0;
let filteredPlants = plantInfo;

function updateGallery() {
    galleryMain.innerHTML = "";
    const startIndex = currentPage * plantsPerPage;
    const endIndex = startIndex + plantsPerPage;

    for (let i = startIndex; i < endIndex && i < filteredPlants.length; i++) {
        const plant = filteredPlants[i];
        const figure = document.createElement("figure");
        figure.className = "gallery-element";
        const link = document.createElement("a");
        link.href = "#"; // Enlace temporal para demostrar el clic
        const image = document.createElement("img");
        image.src = plant.imageUrl;
        image.alt = plant.name;
        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = `<h1>${plant.name}</h1>`;
        figcaption.classList.add("details");

        // Agrega evento clic para mostrar detalles
        link.addEventListener("click", function () {
            const detailsHtml = `
                <p>Nombre científico: ${plant.scientificName}</p>
                <p>Localización: ${plant.location}</p>
                <p>Datos sobre la especie: ${plant.description}</p>
                <button class="close-button">Cerrar</button>
            `;
            figcaption.innerHTML = detailsHtml;

            const closeButton = figcaption.querySelector(".close-button");
            closeButton.addEventListener("click", function () {
                figcaption.innerHTML = `<h1>${plant.name}</h1>`;
                location.reload();
            });
        });

        link.appendChild(image);
        link.appendChild(figcaption);
        figure.appendChild(link);
        galleryMain.appendChild(figure);
    }
}

function updatePaginationButtons() {
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = (currentPage + 1) * plantsPerPage >= filteredPlants.length;
}

prevButton.addEventListener("click", function () {
    if (currentPage > 0) {
        currentPage--;
        updateGallery();
        updatePaginationButtons();
    }
});

nextButton.addEventListener("click", function () {
    if ((currentPage + 1) * plantsPerPage < filteredPlants.length) {
        currentPage++;
        updateGallery();
        updatePaginationButtons();
    }
});

filterInput.addEventListener("input", function () {
    const searchTerm = filterInput.value.toLowerCase();
    filteredPlants = plantInfo.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm)
    );
    currentPage = 0;
    updateGallery();
    updatePaginationButtons();
});

updateGallery();
updatePaginationButtons();
});