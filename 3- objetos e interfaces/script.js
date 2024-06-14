"use strict";
//class e herança elemento
var _a, _b;
const link = document.getElementById('link');
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace('http://', 'https://');
}
//lista de elementos com class
const lista = document.querySelectorAll(".lista-link");
function ativarElemento(elemento) {
    elemento.style.color = "red";
    elemento.style.border = "2px solid red";
}
lista.forEach((link) => {
    if (link instanceof HTMLElement) {
        ativarElemento(link);
    }
});
//Generic
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
(_a = notNull("Andre")) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
(_b = notNull(200)) === null || _b === void 0 ? void 0 : _b.toFixed();
//AS : indica o tipo do elemento
const video = document.querySelector('#video');
video.volume;
//Destructring : indica o tipo do elemento
const { body } = document;
//...res
function comparar(tipo, ...numeros) {
    if (tipo === "menor") {
        return Math.min(...numeros);
    }
}
console.log(comparar("menor", 2, 3, 0, 1));
