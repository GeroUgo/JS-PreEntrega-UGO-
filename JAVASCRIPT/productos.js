"use strict";

class Productos {
    constructor(img = "", titulo = "", precio = 0, descripcion = "", id = ""){
        this.img = img;
        this.titulo = titulo;
        this.precio = precio;
        this.descripcion = descripcion
        this.id = id
    }
}

const servicios = [   
    new Productos(
        "../IMAGENES/LandingPage.jpg", 
        "Landing Page Profesional", 
        1000, 
        "Diseño y desarrollo de una página de aterrizaje optimizada para conversiones, perfecta para campañas de marketing, generación de leads, o promociones.",
        "landing-page"
    ),
    new Productos(
        "../IMAGENES/TiendaOnlinePersonalizada.jpg", 
        "Tienda Online Personalizada", 
        2000, 
        "Desarrollo de una tienda en línea personalizada, con integración de pasarelas de pago, gestión de inventarios, y experiencia de usuario optimizada.",
        "tienda-online"
    ),
    new Productos(
        "../IMAGENES/PaginaWebCorporativa.jpg", 
        "Página Web Corporativa", 
        5000, 
        "Creación de un sitio web profesional para empresas, con enfoque en la identidad de marca y una estructura sólida para mostrar productos y servicios.",
        "web-corporativa"
    ),
    new Productos(
        "../IMAGENES/BlogProfesional.jpg", 
        "Blog Profesional", 
        700, 
        "Diseño y desarrollo de blogs, con funcionalidades de fácil manejo, integración con redes sociales, y optimización para SEO.",
        "blog-profesional"
    ),
    new Productos(
        "../IMAGENES/PortafolioProfesional.jpg", 
        "Portafolio Profesional", 
        500, 
        "Sitio web para mostrar trabajos creativos o profesionales, ideal para artistas, diseñadores, fotógrafos y otros freelances.",
        "portafolio-profesional"
    ),
    new Productos(
        "../IMAGENES/DesarrolloAppWeb.jpg", 
        "Desarrollo de Aplicación Web Personalizada", 
        5000, 
        "Desarrollo de aplicaciones web personalizadas que se adapten a las necesidades específicas de cada cliente, como gestión interna, CRM, etc.",
        "aplicacion-web"
    ),
    new Productos(
        "../IMAGENES/RediseñoWeb.webp", 
        "Rediseño de Sitio Web", 
        700, 
        "Rediseño completo de sitios web existentes para mejorar su funcionalidad, rendimiento, y estética visual, con optimización para móviles.",
        "rediseño-web"
    ),
    new Productos(
        "../IMAGENES/OptimizacionSEO.webp", 
        "Optimización SEO", 
        300, 
        "Servicio de optimización para motores de búsqueda para mejorar el posicionamiento de un sitio web en Google.",
        "optimizacion-seo"
    ),
    new Productos(
        "../IMAGENES/MantenimientoWEB.webp", 
        "Mantenimiento de Sitios Web", 
        400, 
        "Ofrecimiento de servicios mensuales de mantenimiento para asegurarse de que el sitio web esté actualizado y libre de errores.",
        "mantenimiento-sitios-web"
    )
];


const productosContainer = document.getElementById("productos-container");

// Usamos map para crear un array de strings con el HTML de cada producto
const estructuraProductoHTML = servicios.map(({img, titulo, descripcion, precio}) => {
    return `
    <div class="bg-white p-4 rounded-md shadow">
        <img alt="Product image of a stylish modern chair" class="w-full h-48 object-cover mb-4 rounded-md" height="300" src="${img}" width="300"/>
        <h3 class="text-lg font-semibold mb-2 titulo-producto">
            ${titulo}
        </h3>
        <p class="text-gray-600 mb-2">
            ${descripcion}
        </p>
        <p class="text-gray-600 mb-2">
            $${precio}
        </p>
        <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 agregar-carrito-button">
            Añadir al carrito
        </button>
    </div>
    `;
});

const htmlProductos = estructuraProductoHTML.join("");

// Lo metemos al contenedor 
productosContainer.innerHTML = htmlProductos;



