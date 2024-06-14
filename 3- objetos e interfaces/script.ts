

//class e herança elemento

const link = document.getElementById('link');

if(link instanceof HTMLAnchorElement){
    link.href = link.href.replace('http://', 'https://')
}


//lista de elementos com class

const lista = document.querySelectorAll(".lista-link");

function ativarElemento(elemento: HTMLElement){
    elemento.style.color="red";
    elemento.style.border="2px solid red";
}

lista.forEach((link)=>{
   if(link instanceof HTMLElement){

    ativarElemento(link)
     
   }
})

//Generic

function notNull <Variavel>(arg: Variavel){

    if(arg !== null) return arg;
    else return null;
}


notNull("Andre")?.toLocaleLowerCase();
notNull(200)?.toFixed();


//AS : indica o tipo do elemento

const video = document.querySelector('#video') as HTMLVideoElement;

video.volume


//Destructring : indica o tipo do elemento

const {body} : {body: HTMLElement} = document;

//...res

function comparar(tipo:string, ...numeros:number[]){
    if(tipo === "menor"){
        return Math.min(...numeros);
    }
}

console.log(comparar("menor", 2,3,0,1));