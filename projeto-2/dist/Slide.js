export default class Slide {
    constainer;
    slides;
    constrols;
    time;
    index;
    slide;
    constructor(container, slides, controls, time = 5000) {
        this.constainer = container;
        this.slides = slides;
        this.constrols = controls;
        this.time = time;
        this.index = 0;
        this.slide = this.slides[this.index];
        this.index = 0;
    }
    hide(el) {
        el.classList.remove("active");
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[this.index];
        this.slides.forEach((el) => this.hide(el));
        this.slide.classList.add("active");
    }
}
//# sourceMappingURL=Slide.js.map