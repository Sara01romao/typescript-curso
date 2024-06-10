"use strict";
const nome2 = "sara";
console.log(nome2);
let total2 = 200;
total2 = "4000";
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNumber(200));
const h1 = document.querySelector("h1");
function count(a) {
    let itemCount = a + 1;
    return itemCount;
}
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.click();
//exercicio
function toNumber(item) {
    if (typeof item === "string") {
        return Number(item);
    }
    else if (typeof item === "number") {
        return item;
    }
    else {
        throw "value deve ser number | string";
    }
}
console.log(toNumber("sara"));
function mostrarProduto(dados) {
    document.body.innerHTML += `
  
    <div>
        <h2>${dados.nome}</h2>
        <p>R$ ${dados.preco}</p>
        <p>Teclado: ${dados.teclado}</p>
    </div>
  
  `;
}
const notebook = {
    nome: "notebook",
    preco: 2000,
    teclado: true
};
mostrarProduto(notebook);
mostrarProduto({
    nome: "computador",
    preco: 2500,
    teclado: false
});
//Arrays
const numero = [10, 20, 40, 50, 3];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
console.log(maiorQue10(numero));
const taxas = ['taxa', 20, 'taxa', 50, 3];
function filtrarValor(data) {
    return data.filter(itemD => typeof itemD === "number");
}
console.log(filtrarValor(taxas));
