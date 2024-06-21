import Timeout from "./Timeout.js";
export default class Slide {
    constainer;
    slides;
    constrols;
    time;
    index;
    slide;
    timeout;
    pausedTimeout;
    paused;
    constructor(container, slides, controls, time = 5000) {
        this.constainer = container;
        this.slides = slides;
        this.constrols = controls;
        this.time = time;
        this.timeout = null;
        this.pausedTimeout = null;
        this.index = 0;
        this.slide = this.slides[this.index];
        this.paused = false;
        this.index = 0;
        this.init();
    }
    hide(el) {
        el.classList.remove("active");
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[this.index];
        this.slides.forEach((el) => this.hide(el));
        this.slide.classList.add("active");
        this.auto(this.time);
    }
    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);
    }
    prev() {
        if (this.paused)
            return;
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
    }
    next() {
        if (this.paused)
            return;
        const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
        this.show(next);
    }
    pause() {
        this.pausedTimeout = new Timeout(() => {
            this.timeout?.pause();
            this.paused = true;
        }, 300);
    }
    continue() {
        this.pausedTimeout?.clear();
        if (this.paused) {
            this.paused = false;
            this.timeout?.continue();
        }
    }
    addControls() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");
        prevButton.innerText = "Slide Anterior";
        nextButton.innerHTML = "Próximo Slide";
        this.constrols.appendChild(prevButton);
        this.constrols.appendChild(nextButton);
        prevButton.addEventListener("pointerup", () => this.prev());
        nextButton.addEventListener("pointerup", () => this.next());
        this.constrols.addEventListener("pointerdown", () => this.pause());
        this.constrols.addEventListener("pointerup", () => this.continue());
    }
    init() {
        this.addControls();
        this.show(this.index);
    }
}
//# sourceMappingURL=Slide.js.map