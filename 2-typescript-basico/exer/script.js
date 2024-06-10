"use strict";
//defina a interfaze da API: https://api.origamid.dev/json/notebook.json e mostra os dados na tela
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const data = yield response.json();
        showProduct(data);
    });
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    
     <div>
        <h2>${data.nome}- <span>R$ ${data.preco}</span></h2>
        <p>${data.descricao}</p>
        <p>${data.empresaMontadora.pais}</p>
        
     
     </div>
    
    `;
}
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const data = yield response.json();
        MostrarCursos(data);
        console.log(data);
    });
}
function MostrarCursos(cursos) {
    cursos.forEach((curso) => {
        let color;
        if (curso.nivel === "iniciante") {
            color = "blue";
        }
        else {
            color = "red";
        }
        document.body.innerHTML += `
    
        <h2>${curso.nome} - <span style="color:${color}">${curso.nivel}</span> </h2>
      
      `;
    });
}
fetchCursos();
