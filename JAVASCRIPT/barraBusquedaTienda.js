"use strict";

const barraBusquedaTienda = document.getElementById("barraBusquedaTienda");
const botonBarraBusqueda = document.getElementById("boton-barra-busqueda");
const productosContainer = document.getElementById("productos-container"); // Asegúrate de que este contenedor exista en tu HTML
const errorProducto = document.querySelector(".error-producto");

botonBarraBusqueda.addEventListener("click", () => {
    busquedaProductos();
});

barraBusquedaTienda.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        busquedaProductos();
    }
});

const busquedaProductos = () => {
    let hayResultados = false;

    // Lo convertimos en un array para usar el foreach
    Array.from(productosContainer.children).forEach(producto => {
        const tituloProducto = producto.querySelector(".titulo-producto").textContent.trim();

        if (tituloProducto.toLowerCase().includes(barraBusquedaTienda.value.toLowerCase().trim())) {
            producto.style.display = 'block';
            hayResultados = true;
        } else {
            producto.style.display = 'none';
        }
    });

    // Mostrar u ocultar el mensaje de error
    errorProducto.style.display = hayResultados ? "none" : "block";
};

