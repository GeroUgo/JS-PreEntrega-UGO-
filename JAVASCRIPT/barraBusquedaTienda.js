"use strict";

const barraBusquedaTienda = document.getElementById("barraBusquedaTienda");
const botonBarraBusqueda = document.getElementById("boton-barra-busqueda");

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

    // Si no se encuentran productos muestra el mensaje de error
    // Agregue operador ternario
    const errorProducto = document.querySelector(".error-producto");
    errorProducto.style.display = hayResultados ? "none" : "block";
};
