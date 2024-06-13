

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
