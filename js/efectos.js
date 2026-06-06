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
                nombre: "Blog Café",
                descripcion: "HTML, CSS, SASS y JavaScript",
                imagen: "media/blog-cafe.png",
                link: "https://blogcafepracticasp.netlify.app"
            },

            {
                nombre: "App de citas",
                descripcion: "Landing page responsive",
                imagen: "media/avatar1.png",
                link: "#"
            }
        ],

        [
            {
                nombre: "Cloud Coffee",
                descripcion: "PHP, MySQL y Tailwind",
                imagen: "media/avatar1.png",
                link: "#"
            },

            {
                nombre: "Pet Grooming",
                descripcion: "Sistema de citas",
                imagen: "media/blog-cafe.png",
                link: "#"
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

}

function siguientePagina() {

    if (paginaActual === 1) {

        paginaActual = 0;

    } else {

        paginaActual++;

    }

    cargarPagina();

}

cargarPagina();

setInterval(siguientePagina, 4000);

