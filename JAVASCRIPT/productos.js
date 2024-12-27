"use strict";

async function cargarProductos() {
    try {
        const response = await fetch("../servicios.json");
        if (!response.ok) {
            throw new Error("Error al cargar los productos");
        }

        const data = await response.json();

        const productosHTML = data.map(({ id, imagen, titulo, precio, descripcion }) => {
            return `
                <div class="bg-white p-4 rounded-md shadow">
                    <img alt="Imagen del producto" class="w-full h-48 object-cover mb-4 rounded-md" height="300" src="${imagen}" width="300"/>
                    <h3 class="text-lg font-semibold mb-2 titulo-producto">
                        ${titulo}
                    </h3>
                    <p class="text-gray-600 mb-2">
                        ${descripcion}
                    </p>
                    <p class="text-gray-600 mb-2">
                        $${precio}
                    </p>
                    <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 agregar-carrito-button"
                        data-id="${id}" 
                        data-titulo="${titulo}" 
                        data-precio="${precio}" 
                        data-imagen="${imagen}">
                        Añadir al carrito
                    </button>
                </div>
            `;
        }).join("");

        const productosContainer = document.getElementById("productos-container");
        productosContainer.innerHTML = productosHTML;

        // Dispara un evento para indicar que los productos están cargados
        document.dispatchEvent(new Event("productosCargados"));
    } catch (error) {
        console.error("Error cargando los productos:", error);
    }
}

cargarProductos();
