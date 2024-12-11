"use strict";


const metodosPago = document.querySelectorAll('input[name="metodoPago"]');
const camposTarjetaCredito = document.getElementById('campos-tarjeta-credito');

    metodosPago.forEach(metodo => {
        metodo.addEventListener('change', function() {
            this.value === 'tarjeta-credito' ? camposTarjetaCredito.style.display = 'block' : camposTarjetaCredito.style.display = 'none';
        });
    });

    // Recuperar los datos de localStorage
    const productosEnCarrito = JSON.parse(localStorage.getItem('informacion'));
    const total = parseFloat(localStorage.getItem('total'));
    const productosFinalesInformacion = document.querySelector(".productos-finales")

    let subtotal = 0;
    // Agregue desestructuración aca
    productosEnCarrito.forEach(({precio, cantidad}) => {
        subtotal += precio * cantidad;
    });

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total-precio-finalizar-compra').textContent = `$${(subtotal + 5).toFixed(2)}`;

    const productosCarrito = document.createElement('div');
    // Agregue desestructuración acA
    productosEnCarrito.forEach(({ titulo, cantidad, precio }) => {
        const productoDiv = document.createElement('div');
        productoDiv.textContent = `${titulo} x${cantidad} - $${(precio * cantidad).toFixed(2)}`;
        productosFinalesInformacion.appendChild(productoDiv);
    });
    




