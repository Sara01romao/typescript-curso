"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Slide {
    constructor(container, elements, controls, time = 5000) {
        this.constainer = container;
        this.elements = elements;
        this.constrols = controls;
        this.time = time;
        console.log(this.constainer);
        console.log(this.elements);
        console.log(this.constrols);
        console.log(this.time);
    }
}
exports.default = Slide;
