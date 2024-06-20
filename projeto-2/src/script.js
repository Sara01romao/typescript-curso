"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Slide_js_1 = __importDefault(require("./Slide.js"));
const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");
if (container && elements && controls && elements.children.length) {
    new Slide_js_1.default(container, Array.from(elements.children), controls, 3000);
}
