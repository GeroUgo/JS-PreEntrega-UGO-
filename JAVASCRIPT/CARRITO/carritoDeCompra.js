

const abrirCarrito = document.querySelector(".carrito-icono");
const carrito = document.querySelector('.carrito-menu');
const iconoCerrarCarrito = document.querySelector(".icon-close-cart")

let carritoEstado = false;

abrirCarrito.addEventListener("click", ()=> {
    if (carritoEstado === false) {
        carrito.classList.remove('w-0', 'opacity-0', 'hidden');
        carrito.classList.add('w-[20vw]', 'opacity-100');
        carritoEstado = true;
    }
})

iconoCerrarCarrito.addEventListener("click", ()=> {
    if(carritoEstado) {
        // Oculta el carrito
        carrito.classList.remove('w-[20vw]', 'opacity-100');
        carrito.classList.add('w-0', 'opacity-0', 'hidden');
        carritoEstado = false;
    }
})






