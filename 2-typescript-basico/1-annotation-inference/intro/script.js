"use strict";
//Inference
//Typescript consegue definir o tipo então precisa anotar nesses casos
const nome = "Sara"; //ele sabe que é uma string não da para mudar o tipo depois
//indicar tipo das variaveis, principalmente em funções q tem parametro
const produto = 'Livro';
let preco = 200;
const carro = {
    marca: 'audio',
    portas: 5,
};
console.table(carro);
function somar(a, b) {
    return a + b;
}
somar(4, 10);
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$" + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
