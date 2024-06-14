"use strict";
//usar array de uma api
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const responde = yield fetch("https://api.origamid.dev/json/cursos.json");
        const json = yield responde.json();
        handleCursos(json);
    });
}
fetchCursos();
function handleCursos(data) {
    //verifica de data é um arry para sar o métodos de map, filter...
    if (data instanceof Array) {
        console.log('é uma instancia de array');
    }
    //ou verificar com função se é uma array
    if (Array.isArray(data)) {
        console.log('array');
    }
}
////Type Predicate verificar se é string: 
function isString(value) {
    return typeof value === 'string';
}
function handleData(data) {
    if (isString(data)) {
        data.toLowerCase;
    }
}
