"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
        // Alterna las clases para mostrar/ocultar con animación
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            mobileMenu.classList.add("scale-y-100");
        } else {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("scale-y-100");
        }
    });
});
