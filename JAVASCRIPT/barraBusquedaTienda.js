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
        // conseguimos el titulo
        const tituloProducto = producto.querySelector(".titulo-producto").textContent.trim();

        // Si cumple con lo que le pase, entonces muestra el producto
        if (tituloProducto.toLowerCase().includes(barraBusquedaTienda.value.toLowerCase().trim())) {
            producto.style.display = 'block';
            hayResultados = true; 
        } else {
            producto.style.display = 'none';
        }
    });

    // Si no se encuentran productos muestra el mensaje de error
    if (hayResultados) {
        document.querySelector(".error-producto").style.display = "none";  // Oculta error
    } else {
        document.querySelector(".error-producto").style.display = "block"; // Muestra error
    }
};
