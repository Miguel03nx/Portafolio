let paginaActual = 0;

const nombre1 = document.querySelector("#nombre1");
const descripcion1 = document.querySelector("#descripcion1");
const link1 = document.querySelector("#link1");

const nombre2 = document.querySelector("#nombre2");
const descripcion2 = document.querySelector("#descripcion2");
const link2 = document.querySelector("#link2");

const imgtech = document.querySelector("#techno");

const paginas = [
        [
            {
                imagen: "media/citas.png",
                link: "https://citasveterinariacurso.netlify.app"
                // nombre: "App citas",
                // descripcion: "HTML, tailwind y JavaScript",
            },

            {
                nombre: "citas veterinaria",
                descripcion: "Sistema de gestión para clínicas veterinarias que permite administrar pacientes y citas mediante operaciones CRUD en una interfaz dinámica y fácil de usar.",
                link: "https://citasveterinariacurso.netlify.app",
                // imagen: "media/blog-cafe.png",
                // nombre: "Blog café",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/blog-cafe.png",
                // link: "https://blogcafepracticasp.netlify.app"
                imagen2: "media/tailwind.png"
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
                nombre: "App store",
                descripcion: "Landing page desarrollada para practicar diseño responsive y maquetación web, enfocada en la presentación de productos con una interfaz moderna y organizada.",
                link: "https://fullstackweb-store.netlify.app",
                // imagen: "media/blog-cafe.png",
                // nombre: "Landing festival",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/festival.png",
                // link: "https://festivalrockedmmexico.netlify.app"
                imagen2: "media/css.png"
            }
        ],

        [
            {
                imagen: "media/festival.png",
                link: "https://festivalrockedmmexico.netlify.app"
                // nombre: "Landing tienda",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/tienda.png",
                // link: "https://fullstackweb-store.netlify.app"
            },

            {
                nombre: "Festival rock",
                descripcion: "Landing page para un festival de música. Desarrollada para reforzar habilidades con SASS y JavaScript, creando una experiencia visual moderna, responsive y atractiva.",
                link: "https://festivalrockedmmexico.netlify.app",
                // imagen: "media/blog-cafe.png",
                // nombre: "Landing festival",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/festival.png",
                // link: "https://festivalrockedmmexico.netlify.app"
                imagen2: "media/sass.png"
            }
        ],

        [
            {
                imagen: "media/blog-cafe.png",
                link: "https://blogcafepracticasp.netlify.app"
                // nombre: "Landing tienda",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/tienda.png",
                // link: "https://fullstackweb-store.netlify.app"
            },

            {
                nombre: "Blog de café",
                descripcion: "Blog informativo sobre café incluye formularios interactivos para practicar maquetación, validación de entradas y diseño responsive utilizando SASS y JavaScript.",
                link: "https://blogcafepracticasp.netlify.app",
                // imagen: "media/blog-cafe.png",
                // nombre: "Landing festival",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/festival.png",
                // link: "https://festivalrockedmmexico.netlify.app"
                imagen2: "media/sass.png"
            }
        ],

        [
            {
                imagen: "media/api-clima.png",
                link: "https://time-api-pract.netlify.app"
                // nombre: "Landing tienda",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/tienda.png",
                // link: "https://fullstackweb-store.netlify.app"
            },

            {
                nombre: "app del clima",
                descripcion: "Aplicación web para consultar el clima en tiempo real. Desarrollada con HTML, tailwind CSS y JavaScript.",
                link: "https://time-api-pract.netlify.app",
                // imagen: "media/api-clima.png",
                // nombre: "Landing festival",
                // descripcion: "HTML, CSS, SASS, JavaScript",
                // imagen: "media/festival.png",
                // link: "https://festivalrockedmmexico.netlify.app"
                imagen2: "media/tailwind.png"
            }
        ],

];



function cargarPagina() {

    const pagina = paginas[paginaActual];

    const imagen1 = document.querySelector("#img1");
    const nombre1 = document.querySelector("#nombre1");

    imagen1.src = pagina[0].imagen;
    nombre1.textContent = pagina[1].nombre;
    imgtech.src = pagina[1].imagen2;


    // const descripcion1 = document.querySelector("#descripcion1");
    const descripcion2 = document.querySelector("#descripcion2");

    // descripcion1.textContent = pagina[0].descripcion;
    descripcion2.textContent = pagina[1].descripcion;

    // const link1 = document.querySelector("#link1");
    const link3 = document.querySelector("#link3");
    const link2 = document.querySelector("#link2");

    // link1.href = pagina[0].link;
    link3.href = pagina[0].link;
    link2.href = pagina[1].link;

    // const img1 = document.querySelector("#img1");
    // const img2 = document.querySelector("#img2");
    // img1.src = pagina[0].imagen;
    // img2.src = pagina[1].imagen;

    // puntos del carruser para las paginas de los proyectos
    // const dot1 = document.querySelector("#dot1");
    // const dot2 = document.querySelector("#dot2");
    // const dot3 = document.querySelector("#dot3");
    // const dot4 = document.querySelector("#dot4");

    const dots = document.querySelectorAll(".dot");

    for (let i= 0; i<dots.length; i++){

        const dot = dots[i];

        dot.classList.remove("bg-[#3db395]");
        dot.classList.add("bg-gray-600");
        
        
    }
    
    const dotActivo = dots[paginaActual];

    dotActivo.classList.remove("bg-gray-600");
    dotActivo.classList.add("bg-[#3db395]");

}

function siguientePagina() {

    if (paginaActual === paginas.length - 1) {

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

dot3.addEventListener("click", () => {
    clearInterval(timer);
    paginaActual = 2;
    cargarPagina();
    timer = setInterval(siguientePagina, 5000);
});

dot4.addEventListener("click", () => {
    clearInterval(timer);
    paginaActual = 3;
    cargarPagina();
    timer = setInterval(siguientePagina, 5000);
});

dot5.addEventListener("click", () => {
    clearInterval(timer);
    paginaActual = 4;
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