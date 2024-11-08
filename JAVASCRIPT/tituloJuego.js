"use strict";

// TITULO
let palabra = "ADIVINA EL NUMERO ENTRE 1 Y 100";

let index = 0;
for (let i = 0; i < palabra.length; i++) {
    setTimeout(() => {
        document.querySelector("H1").textContent = palabra.substring(0, i + 1);
    }, 100 * i);  
}


let estadoJuego = false;
let intentos = 10;
let numero; 