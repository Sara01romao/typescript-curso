export default class Slide{
  constainer: Element;
  slides: Element[];
  constrols: Element;
  time:number;
  index:number;
  slide:Element;

  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000,
    ){
        this.constainer = container;
        this.slides = slides;
        this.constrols = controls;
        this.time = time;

        this.index = 0;
        this.slide = this.slides[this.index];

        this.index=0;
    }

    hide(el:Element){
        el.classList.remove("active");
    }

    show(index: number){
        this.index = index;
        this.slide = this.slides[this.index];
        this.slides.forEach((el) => this.hide(el));
        this.slide.classList.add("active")
    }

    


}