"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const mobileBtn = document.getElementById('btn-mobile');
function openMenuMobile(event) {
    const nav = document.getElementById("nav");
    const button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
            nav === null || nav === void 0 ? void 0 : nav.classList.remove('active');
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Abrir Menu");
        }
        else {
            nav === null || nav === void 0 ? void 0 : nav.classList.add('active');
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar Menu");
        }
    }
}
mobileBtn === null || mobileBtn === void 0 ? void 0 : mobileBtn.addEventListener('pointerdown', openMenuMobile);
