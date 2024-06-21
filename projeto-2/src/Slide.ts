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

        this.init();
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
    
    prev(){
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev)
    }

    next(){
       

        const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
        this.show(next)
    }

    private addControls(){
       const prevButton = document.createElement("button");
       const nextButton = document.createElement("button");

       prevButton.innerText = "Slide Anterior";
       nextButton.innerHTML = "Próximo Slide";

       this.constrols.appendChild(prevButton);
       this.constrols.appendChild(nextButton);

       prevButton.addEventListener("pointerup", () => this.prev());
       nextButton.addEventListener("pointerup", () => this.next());
    

    }

    private init (){
        this.addControls();
        this.show(this.index);

    }

    


}