"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function dataCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const responde = yield fetch("https://api.origamid.dev/json/cursos.json");
        const json = yield responde.json();
        console.log(json);
        listaCurso(json);
    });
}
dataCursos();
//type Guard
function verificaData(value) {
    if (value && typeof value === 'object' && "nome") {
        return true;
    }
    else {
        return false;
    }
}
function listaCurso(data) {
    if (Array.isArray(data)) {
        data.filter(verificaData).forEach(item => {
            document.body.innerHTML += `
            
            <p>${item.nome}</p>
            
            `;
        });
    }
}
