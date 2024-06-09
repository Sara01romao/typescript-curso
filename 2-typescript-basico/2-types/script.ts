 const nome2 = "sara";

 console.log(nome2)

 let total2: string | number = 200;
 total2 = "4000";

 function isNumber(value:string | number){

    if(typeof value === "number"){
        return true;
    }else{
        return false;
    }
 }

 console.log(isNumber(200))

 const h1 = document.querySelector("h1");

 function count(a:number){
    let itemCount= a + 1;

    return itemCount;
 }

   const button = document.querySelector("button");

   button?.click();





//exercicio
function toNumber(item: string | number){
    if(typeof item === "string"){
        return Number(item)
    }else if(typeof item === "number"){
       return item
    }else{
        throw "value deve ser number | string"
    }

}

console.log(toNumber("sara"))


//Interface objetos

type Produto ={
    nome: string,
    preco:number,
    teclado:boolean
}


function mostrarProduto(dados:Produto){

  document.body.innerHTML += `
  
    <div>
        <h2>${dados.nome}</h2>
        <p>R$ ${dados.preco}</p>
        <p>Teclado: ${dados.teclado}</p>
    </div>
  
  `

}


const notebook : Produto ={
    nome: "notebook",
    preco: 2000,
    teclado: true
}
 
mostrarProduto(notebook)

mostrarProduto({
    nome: "computador",
    preco: 2500,
    teclado: false
})
