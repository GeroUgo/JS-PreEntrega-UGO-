"use strict";

const pantallaInicioJuego = document.querySelector(".main__game-start-screen-container");
const botonEmpezarJuego = document.querySelector(".main__game-start-screen-button-start");
const intentosContenedor = document.querySelector(".main__game-intentos-container");
const numeroPuesto = document.querySelector(".main__game-number");
const mandarNumero = document.querySelector(".main__game-submit");
const instrucciones = document.querySelector(".main__game-instruccion");
const pantallaJuego = document.querySelector(".main__game-container");
const pantallaJuegoPerdido = document.querySelector(".main__game-partida-perdida-container");
const botonJugarDeNuevoPartidaGanada = document.querySelector(".boton-volver-jugar-ganada");
const botonJugarDeNuevoPartidaPerdida = document.querySelector(".boton-volver-jugar-perdida")


// Evento para comenzar el juego
botonEmpezarJuego.addEventListener("click", () => {
    pantallaInicioJuego.style.display = "none";
    estadoJuego = true;
    pantallaJuego.style.display = "flex";
    iniciarJuego();
});

const mensajeError = document.querySelector(".main__game-error");
const mensajeErrorMayor100 = document.querySelector(".main__game-error-mas-100")
let timeoutId;
let timeoutIdError100;

// Verifica si los valores puestos estan bien
mandarNumero.addEventListener("click", () => {
    if(numeroPuesto.value !== "" ) {
        if(numeroPuesto.value <= 100){
            intentos--;
            intentosContenedor.textContent = `Te quedan ${intentos} intentos`;
        
            // Instrucciones de juego
            if (numeroPuesto.value < numero) {
                instrucciones.textContent = "El número es más grande";
            } else if (numeroPuesto.value > numero) {
                instrucciones.textContent = "El número es más chico";
            } else {
                pantallaJuego.style.display = "none";
                document.querySelector(".main__game-partida-ganada-container").style.display = "flex";
                document.querySelector(".numero").textContent = `El numero era ${numero}`
                return; 
            }

            mensajeErrorMayor100.textContent = "";

        } else {
            mensajeErrorMayor100.textContent = "El numero tiene que ser menor o igual a 100"

                // Si ya existe un timeout en ejecución, lo limpia
                if (timeoutIdError100) {
                clearTimeout(timeoutIdError100);
                }
        
                // Establece un nuevo timeout
                timeoutIdError100 = setTimeout(() => {
                    mensajeErrorMayor100.textContent = "";
                }, 4000);

                    mensajeErrorMayor100.style.color = "red"
            }

        mensajeError.textContent = "";
        
        verificarJuegoPerdido();
    } else {

        mensajeError.textContent = "Tenés que colocar un número";

        // Si ya existe un timeout en ejecución, lo limpia
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    
        // Establece un nuevo timeout
        timeoutId = setTimeout(() => {
            mensajeError.textContent = "";
        }, 4000);

        document.querySelector(".main__game-error").style.color = "red"
    }
});

// Función principal del juego
const iniciarJuego = () => {
    if (estadoJuego) {
        // Generar número aleatorio
        numero = Math.round(Math.random() * 100);
        console.log(numero);
    } else {
        console.log("Hubo un error al iniciar");
    }
};

// Verifica si se perdió el juego
const verificarJuegoPerdido = () => {
    if (intentos === 0) {
        pantallaJuego.style.display = "none";
        pantallaJuegoPerdido.style.display = "flex";
        estadoJuego = false;  
    }
};