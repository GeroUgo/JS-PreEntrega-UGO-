"use strict";

const botonAgregarAlCarrito = document.querySelectorAll(".agregar-carrito-button");
const productosContainerCarrito = document.querySelector(".productos-container-carrito");
const precioTotalCarrito = document.querySelector(".precio-total-carrito");

// Cargar productos del carrito desde localStorage al iniciar
let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar el total del carrito
function actualizarTotalCarrito() {
    // Calcula el precio total
    const total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    precioTotalCarrito.innerHTML = `Total: $ ${total}`;
}

// Función para renderizar los productos en el carrito
function renderizarCarrito() {
    productosContainerCarrito.innerHTML = ''; // Limpia el carrito antes de volver a renderizar

    productosEnCarrito.forEach((producto, index) => {
        const carritoHTML = `
            <div class="flex justify-between items-center p-5 border m-3 productos" id="${producto.id}">
                <img class="w-24" src="${producto.img}" alt="${producto.titulo}">
                <div class="flex flex-col items-center gap-2 justify-center">
                    <p class="text-center">${producto.titulo}</p>
                    <p>$ ${producto.precio}</p>
                    <div class="flex gap-6">
                        <button class="px-2 py-1 bg-gray-300 rounded boton-contador-carrito boton-menos" data-index="${index}">-</button>
                        <span class="font-bold contador-carrito">${producto.cantidad}</span>
                        <button class="px-2 py-1 bg-gray-300 rounded boton-contador-carrito boton-mas" data-index="${index}">+</button>
                    </div>
                </div>
                <i class="fa-solid fa-xmark p-5 cursor-pointer borrar-producto-carrito" data-index="${index}"></i>
            </div>
        `;
        const contenedorProducto = document.createElement("DIV");
        contenedorProducto.innerHTML = carritoHTML;
        productosContainerCarrito.appendChild(contenedorProducto);
    });

    // SUMA Y RESTA DE PRODUCTOS EN CARRITO
    const botonesMas = document.querySelectorAll(".boton-mas");
    const botonesMenos = document.querySelectorAll(".boton-menos");

    botonesMas.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            productosEnCarrito[index].cantidad++; //incrementa la cantidad
            actualizarLocalStorage();
            renderizarCarrito(); 
        });
    });

    botonesMenos.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            if (productosEnCarrito[index].cantidad > 1) {
                productosEnCarrito[index].cantidad--; //decremtna la cantidad
                actualizarLocalStorage();
                renderizarCarrito(); 
            }
        });
    });

    actualizarTotalCarrito();
    borrarProductosCarrito(); // Llama a la función de borrar productos
    carritoEstadoProductosMensaje()
}

// Función para agregar productos al carrito
botonAgregarAlCarrito.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        const servicio = servicios[index]; // obtiene el servicio correspondiente

        // Verifica si el producto ya está en el carrito
        const productoExiste = productosEnCarrito.some(producto => producto.id === servicio.id);

        if (!productoExiste) {
            // Agrega el producto al carrito y le asigna una cantidad inicial de 1
            productosEnCarrito.push({ ...servicio, cantidad: 1 });

            actualizarLocalStorage();
            renderizarCarrito();

            // Estado de carrito (punto rojo si es la primera vez)
            const carritoPuntoRojoHTML = `
                <span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex h-3 w-3 rounded-full bg-pink-500"></span>
                </span>
            `;

            if (productosEnCarrito.length === 1) {
                const div = document.createElement('div');
                div.innerHTML = carritoPuntoRojoHTML;
                const puntoRojoElement = div.firstElementChild;
                abrirCarrito.appendChild(puntoRojoElement); // Agrega el punto rojo
            }

            carritoEstadoProductosMensaje();
        } else {
            alert("Este producto ya está en el carrito.");
        }
    });
});

// Función para actualizar el localStorage con los productos del carrito
function actualizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
}

// Función para mostrar el mensaje si el carrito está vacío
const carritoEstadoProductosMensaje = () => {
    if (productosContainerCarrito.children.length > 0) {
        document.querySelector(".mensaje-carrito-sin-productos").style.display = "none"; // Oculta el mensaje de "sin productos"
    } else {
        document.querySelector(".mensaje-carrito-sin-productos").style.display = "block"; // Muestra el mensaje de "sin productos"
    }
}

// Función para borrar productos del carrito
const borrarProductosCarrito = () => {
    const botonesBorrar = productosContainerCarrito.querySelectorAll(".borrar-producto-carrito");
    botonesBorrar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            productosEnCarrito.splice(index, 1); // Elimina el producto del carrito
            actualizarLocalStorage();
            renderizarCarrito(); // Vuelve a renderizar el carrito
            carritoEstadoProductosMensaje(); // Actualiza el mensaje del estado del carrito
        });
    });
}

// Inicializa el contador y el carrito
renderizarCarrito();


// GUARDO LA INFO PARA RECUPERARLA EN LA PAGINA DE FINALIZA COMRPA

const botonAFinalizarCompra = document.getElementById("boton-redireccion-finalizar-compra");

botonAFinalizarCompra.addEventListener("click", () => {
    const total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

    localStorage.setItem("informacion", JSON.stringify(productosEnCarrito));
    localStorage.setItem("total", total);

});


