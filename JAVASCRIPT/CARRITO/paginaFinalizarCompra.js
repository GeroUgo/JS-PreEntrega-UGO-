"use strict";


const metodosPago = document.querySelectorAll('input[name="metodoPago"]');
const camposTarjetaCredito = document.getElementById('campos-tarjeta-credito');

metodosPago.forEach(metodo => {
    metodo.addEventListener('change', function() {
        if (this.value === 'tarjeta-credito') {
            camposTarjetaCredito.style.display = 'block';
        } else {
            camposTarjetaCredito.style.display = 'none';
        }
    });
});

    // Recuperar los datos de localStorage
    const productosEnCarrito = JSON.parse(localStorage.getItem('informacion'));
    const total = parseFloat(localStorage.getItem('total'));
    const productosFinalesInformacion = document.querySelector(".productos-finales")

    let subtotal = 0;
    productosEnCarrito.forEach(producto => {
        subtotal += producto.precio * producto.cantidad;
    });

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total-precio-finalizar-compra').textContent = `$${(subtotal + 5).toFixed(2)}`;

    const productosCarrito = document.createElement('div');
    productosEnCarrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.textContent = `${producto.titulo} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}`;
        productosFinalesInformacion.appendChild(productoDiv);
    });




