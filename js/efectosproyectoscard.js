let paginaActual = 0;

const nombre1 = document.querySelector("#nombre1");
const descripcion1 = document.querySelector("#descripcion1");
const link1 = document.querySelector("#link1");

const nombre2 = document.querySelector("#nombre2");
const descripcion2 = document.querySelector("#descripcion2");
const link2 = document.querySelector("#link2");

const paginas = [
        [
            {
                imagen: "media/citas.png",
                link: "https://citasveterinariacurso.netlify.app"
                // nombre: "App citas",
                // descripcion: "HTML, tailwind y JavaScript",
            },

            {
                nombre: "APP DE CITAS",
                descripcion: "HTML, CSS, SASS, JavaScript",
                link: "https://blogcafepracticasp.netlify.app"
                // imagen: "media/blog-cafe.png",
                // nombre: "Blog café",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/blog-cafe.png",
                // link: "https://blogcafepracticasp.netlify.app"
            }
        ],

        [
            {
                imagen: "media/tienda.png",
                link: "https://fullstackweb-store.netlify.app"
                // nombre: "Landing tienda",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/tienda.png",
                // link: "https://fullstackweb-store.netlify.app"
            },

            {
                 nombre: "Landing festival",
                descripcion: "HTML, CSS, SASS, JavaScript",
                link: "https://festivalrockedmmexico.netlify.app"
                // imagen: "media/blog-cafe.png",
                // nombre: "Landing festival",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/festival.png",
                // link: "https://festivalrockedmmexico.netlify.app"
            }
        ]
];


function cargarPagina() {

    const pagina = paginas[paginaActual];

    const nombre1 = document.querySelector("#nombre1");
    const nombre2 = document.querySelector("#nombre2");

    nombre1.textContent = pagina[0].nombre;
    nombre2.textContent = pagina[1].nombre;

    const descripcion1 = document.querySelector("#descripcion1");
    const descripcion2 = document.querySelector("#descripcion2");

    descripcion1.textContent = pagina[0].descripcion;
    descripcion2.textContent = pagina[1].descripcion;

    const link1 = document.querySelector("#link1");
    const link2 = document.querySelector("#link2");

    link1.href = pagina[0].link;
    link2.href = pagina[1].link;

    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    img1.src = pagina[0].imagen;
    img2.src = pagina[1].imagen;

    // puntos del carruser para las paginas de los proyectos
    const dot1 = document.querySelector("#dot1");
    const dot2 = document.querySelector("#dot2");

    if (paginaActual === 0) {
        dot1.classList.add("bg-[#3db395]");
        dot2.classList.add("bg-gray-600");
    } else {
        dot1.classList.remove("bg-[#3db395]");
        dot2.classList.remove("bg-gray-600");
    } if (paginaActual === 1) {
        dot1.classList.add("bg-gray-600");
        dot2.classList.add("bg-[#3db395]");
    } else {
        dot1.classList.remove("bg-gray-600");
        dot2.classList.remove("bg-[#3db395]");
    }

    // forma simplificada
    // if (paginaActual === 0) {

    //     dot1.classList.add("bg-[#3db395]");
    //     dot1.classList.remove("bg-gray-600");

    //     dot2.classList.add("bg-gray-600");
    //     dot2.classList.remove("bg-[#3db395]");

    // } else {

    //     dot1.classList.add("bg-gray-600");
    //     dot1.classList.remove("bg-[#3db395]");

    //     dot2.classList.add("bg-[#3db395]");
    //     dot2.classList.remove("bg-gray-600");

    // }

}

function siguientePagina() {

    if (paginaActual === 1) {

        paginaActual = 0;

    } else {

        paginaActual++;

    }

    cargarPagina();

}

let timer = setInterval(siguientePagina, 5000);

dot1.addEventListener("click", () => {
    clearInterval(timer);
    paginaActual = 0;
    cargarPagina();
    timer = setInterval(siguientePagina, 5000);
});

dot2.addEventListener("click", () => {
    clearInterval(timer);
    paginaActual = 1;
    cargarPagina();
    timer = setInterval(siguientePagina, 5000);
});


// animacion de las estrellas

// moverEstrella(document.querySelector(".sparkle"));
// const estrella = document.querySelector(".sparkle");
const estrellas = document.querySelectorAll(".sparkle");


function moverEstrella(estrellas) {
    
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    estrellas.style.left = `${x}%`;
    estrellas.style.top = `${y}%`;
    
}

for (let i = 0; i < estrellas.length; i++){
    const estrella = estrellas[i];
    moverEstrella(estrella);
    
    estrella.addEventListener("animationiteration", () => {
        moverEstrella(estrella);
    });
  }  

// console.log(estrellas);