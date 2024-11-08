"use strict";


// Eventos para reiniciar el juego al perder o ganar

botonJugarDeNuevoPartidaPerdida.addEventListener("click", ()=>{
    jugarDenuevo();
})

botonJugarDeNuevoPartidaGanada.addEventListener("click", ()=>{
    jugarDenuevo();
})

// Reinicia el juego
const jugarDenuevo = () => {
        pantallaJuegoPerdido.style.display = "none";
        document.querySelector(".main__game-partida-ganada-container").style.display = "none";
        estadoJuego = true;
        pantallaJuego.style.display = "flex";
        intentos = 10;
        numeroPuesto.value = "";
        instrucciones.textContent = "Escribe un número";
        intentosContenedor.textContent = `Te quedan ${intentos} intentos`;
        document.querySelector(".main__game-partida-ganada-container").style.display = "none";
        iniciarJuego();  
};
