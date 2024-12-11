"use strict";

const abrirCarrito = document.querySelectorAll(".carrito-icono");
const carrito = document.querySelector('.carrito-menu');
const iconoCerrarCarrito = document.querySelector(".icon-close-cart");

let carritoEstado = false;

const toggleCarrito = () => {
    if (!carritoEstado) {
        carrito.classList.remove('w-0', 'opacity-0', 'hidden');
        carrito.classList.add('lg:w-[25vw]', 'md:w-[100vw]', 'w-[100vw]', 'opacity-100'); // Responsivo
        carritoEstado = true;
    } else {
        carrito.classList.remove('lg:w-[25vw]', 'md:w-[100vw]', 'w-[100vw]', 'opacity-100');
        carrito.classList.add('w-0', 'opacity-0', 'hidden');
        carritoEstado = false;
    }
};

abrirCarrito.forEach (icon => {
    icon.addEventListener("click", toggleCarrito);
})

iconoCerrarCarrito.addEventListener("click", toggleCarrito);





