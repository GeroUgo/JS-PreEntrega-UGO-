"use strict";

class Productos {
    constructor(img, titulo = "", precio = 0, descripcion = "", id = ""){
        this.img = img;
        this.titulo = titulo;
        this.precio = precio;
        this.descripcion = descripcion
        this.id = id
    }
}

const servicios = [   
    new Productos(
        "https://storage.googleapis.com/a1aa/image/IlXki5xeEJUNWa6nDN2JcKrnjAzHCnxCOI2WX8pYSmbEpz5JA.jpg", 
        "Landing Page Profesional", 
        1000, 
        "Diseño y desarrollo de una página de aterrizaje optimizada para conversiones, perfecta para campañas de marketing, generación de leads, o promociones.",
        "landing-page"
    ),
    new Productos(
        "https://storage.googleapis.com/a1aa/image/ny3GyiIIiPo5GthFQafFfiyOw9Q1YPEAYoDgnC8rXMqFSnzTA.jpg", 
        "Tienda Online Personalizada", 
        2000, 
        "Desarrollo de una tienda en línea personalizada, con integración de pasarelas de pago, gestión de inventarios, y experiencia de usuario optimizada.",
        "tienda-online"
    ),
    new Productos(
        "https://storage.googleapis.com/a1aa/image/ew0DSYLxGVWZKChO1cFir2mHAVNJ5HuswcVVEz1IeunJSnzTA.jpg", 
        "Página Web Corporativa", 
        5000, 
        "Creación de un sitio web profesional para empresas, con enfoque en la identidad de marca y una estructura sólida para mostrar productos y servicios.",
        "web-corporativa"
    ),
    new Productos(
        "https://storage.googleapis.com/a1aa/image/8jAmBtpMRkrfKy4nsKfV3f9XbfIcaPuAvoCGLdKkFxdyHdOPB.jpg", 
        "Blog Profesional", 
        700, 
        "Diseño y desarrollo de blogs, con funcionalidades de fácil manejo, integración con redes sociales, y optimización para SEO.",
        "blog-profesional"
    ),
    new Productos(
        "https://storage.googleapis.com/a1aa/image/Cfk9ol8S0NUgTanY9exb6cuIHvlOxW9tt2VminiAhvEASnzTA.jpg", 
        "Portafolio Profesional", 
        500, 
        "Sitio web para mostrar trabajos creativos o profesionales, ideal para artistas, diseñadores, fotógrafos y otros freelances.",
        "portafolio-profesional"
    ),
    new Productos(
        "https://storage.googleapis.com/a1aa/image/9fbe4LqWdvkCRUZbLnLrxFMMFByRSA1Bfy8hf5IlVfaIP6ceE.jpg", 
        "Desarrollo de Aplicación Web Personalizada", 
        5000, 
        "Desarrollo de aplicaciones web personalizadas que se adapten a las necesidades específicas de cada cliente, como gestión interna, CRM, etc.",
        "aplicacion-web"
    ),
    new Productos(
        "https://imgs.search.brave.com/w9_lmyD5NhgtcgsjWRnQm71IDDtyPjxh8R5-BK5Qfpw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW50ZXZlbmlvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wOS9yZWRpc2Ul/QzMlQjFvLXdlYi5q/cGc", 
        "Rediseño de Sitio Web", 
        700, 
        "Rediseño completo de sitios web existentes para mejorar su funcionalidad, rendimiento, y estética visual, con optimización para móviles.",
        "rediseño-web"
    ),
    new Productos(
        "https://imgs.search.brave.com/P_MAnNidFsTT9OgHwzIpvQx_meDjvtCNjk2tZlumBEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWVic2Nob29sLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzEwL1NF/UlAtMTAyNHg1Mzgu/cG5n", 
        "Optimización SEO", 
        300, 
        "Servicio de optimización para motores de búsqueda para mejorar el posicionamiento de un sitio web en Google.",
        "optimizacion-seo"
    ),
    new Productos(
        "https://storage.googleapis.com/a1aa/image/XgwOs5CfVU1TbCLqqsw7YzqVUOeS8JBLFz2wz1YdG4pCSnzTA.jpg", 
        "Mantenimiento de Sitios Web", 
        400, 
        "Ofrecimiento de servicios mensuales de mantenimiento para asegurarse de que el sitio web esté actualizado y libre de errores.",
        "mantenimiento-sitios-web"
    )
];


const productosContainer = document.getElementById("productos-container");

// Usamos map para crear un array de strings con el HTML de cada producto
const estructuraProductoHTML = servicios.map(servicio => {
    return `
    <div class="bg-white p-4 rounded-md shadow">
        <img alt="Product image of a stylish modern chair" class="w-full h-48 object-cover mb-4 rounded-md" height="300" src="${servicio.img}" width="300"/>
        <h3 class="text-lg font-semibold mb-2 titulo-producto">
            ${servicio.titulo}
        </h3>
        <p class="text-gray-600 mb-2">
            ${servicio.descripcion}
        </p>
        <p class="text-gray-600 mb-2">
            $${servicio.precio}
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



