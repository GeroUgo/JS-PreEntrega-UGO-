"use strict";

const productosContainerCarrito = document.querySelector(".productos-container-carrito");
const precioTotalCarrito = document.querySelector(".precio-total-carrito");
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para actualizar el total del carrito
function actualizarTotalCarrito() {
    const total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    precioTotalCarrito.innerHTML = `Total: $ ${total}`;
}

// Función para renderizar los productos en el carrito
function renderizarCarrito() {
    productosContainerCarrito.innerHTML = "";
    productosEnCarrito.forEach(({ id, imagen, titulo, precio, cantidad }, index) => {
        const carritoHTML = `
            <div class="flex justify-between items-center p-5 border m-3 productos" id="${id}">
                <img class="w-24" src="${imagen}" alt="${titulo}">
                <div class="flex flex-col items-center gap-2 justify-center">
                    <p class="text-center">${titulo}</p>
                    <p>$ ${precio}</p>
                    <div class="flex gap-6">
                        <button class="px-2 py-1 bg-gray-300 rounded boton-contador-carrito boton-menos" data-index="${index}">-</button>
                        <span class="font-bold contador-carrito">${cantidad}</span>
                        <button class="px-2 py-1 bg-gray-300 rounded boton-contador-carrito boton-mas" data-index="${index}">+</button>
                    </div>
                </div>
                <i class="fa-solid fa-xmark p-5 cursor-pointer borrar-producto-carrito" data-index="${index}"></i>
            </div>
        `;
        const contenedorProducto = document.createElement("div");
        contenedorProducto.innerHTML = carritoHTML;
        productosContainerCarrito.appendChild(contenedorProducto);
    });

    // Eventos de los botones de sumar y restar cantidad
    const botonesMas = document.querySelectorAll(".boton-mas");
    const botonesMenos = document.querySelectorAll(".boton-menos");

    botonesMas.forEach((boton) => {
        boton.addEventListener("click", () => {
            const index = boton.dataset.index;
            productosEnCarrito[index].cantidad++;
            actualizarLocalStorage();
            renderizarCarrito();
        });
    });

    botonesMenos.forEach((boton) => {
        boton.addEventListener("click", () => {
            const index = boton.dataset.index;
            if (productosEnCarrito[index].cantidad > 1) {
                productosEnCarrito[index].cantidad--;
                actualizarLocalStorage();
                renderizarCarrito();
            }
        });
    });

    actualizarTotalCarrito();
    borrarProductosCarrito();
    carritoEstadoProductosMensaje();
}

function agregarProductoAlCarrito(event) {
    const boton = event.target;
    const id = boton.dataset.id;
    const titulo = boton.dataset.titulo;
    const precio = parseFloat(boton.dataset.precio);
    const imagen = boton.dataset.imagen;

    const productoExiste = productosEnCarrito.some((producto) => producto.id === id);

    if (!productoExiste) {
        productosEnCarrito.push({ id, titulo, precio, imagen, cantidad: 1 });
        actualizarLocalStorage();
        renderizarCarrito();
    } else {
        Toastify({
            text: "El producto ya está en el carrito",
            duration: 3000,
        }).showToast();
    }
}


function borrarProductosCarrito() {
    const botonesBorrar = productosContainerCarrito.querySelectorAll(".borrar-producto-carrito");
    botonesBorrar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const index = e.target.dataset.index
            productosEnCarrito.splice(index, 1);
            actualizarLocalStorage();
            renderizarCarrito();
        });
    });
}

// Función para actualizar el localStorage
function actualizarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

// Función para mostrar mensaje de carrito vacío
function carritoEstadoProductosMensaje() {
    const mensaje = document.querySelector(".mensaje-carrito-sin-productos");
    mensaje.style.display = productosEnCarrito.length > 0 ? "none" : "block";
}

// Esperar a que los productos se carguen antes de asignar eventos
document.addEventListener("productosCargados", () => {
    const botonesAgregar = document.querySelectorAll(".agregar-carrito-button");
    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", agregarProductoAlCarrito);
    });
});


renderizarCarrito();


// GUARDO LA INFO PARA RECUPERARLA EN LA PAGINA DE FINALIZA COMRPA

const botonAFinalizarCompra = document.getElementById("boton-redireccion-finalizar-compra");

botonAFinalizarCompra.addEventListener("click", () => {
    const total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

    localStorage.setItem("informacion", JSON.stringify(productosEnCarrito));
    localStorage.setItem("total", total);

});