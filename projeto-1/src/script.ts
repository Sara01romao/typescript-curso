import Estatiscas from "./Estatiscas.js";
import { CountList } from "./countBy.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
// import { TransacaoAPI } from "./normalizarTransacao.js";



async function handleData(){
    const data = await fetchData<TransacaoAPI[]> ("https://api.origamid.dev/json/transacoes.json?");

    if(!data) return;

    const transacoes = data.map(normalizarTransacao);
   

    preecherTabela(transacoes)
    preecherEstatisticas(transacoes)
    
}

function preecherLista(lista: CountList, containerId: string):void{
    const containerElement = document.getElementById(containerId);

    if(containerElement){
        Object.keys(lista).forEach((key)=>{
            containerElement.innerHTML += `<p>${key}: ${lista[key]} </p>`
        })
    }
}

function preecherEstatisticas(transacoes: Transacao[]):void{
   
    const data = new Estatiscas(transacoes);

    console.log(data);
    

    preecherLista(data.pagamento, 'pagamento');
    preecherLista(data.status, 'status');

   

    console.log(data)
   
    



    const totalElement = document.querySelector<HTMLElement>("#total span");
    if(totalElement){
        totalElement.innerHTML = data.total.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        });
    }


    const diaElement = document.querySelector<HTMLElement>("#dia span");
    if(diaElement){
        diaElement.innerHTML = data.melhorDia[0];
    }

}

function preecherTabela(transacoes: Transacao[]): void{

    const tabela = document.querySelector("#transacoes tbody");
    
    if(!tabela) return;

    transacoes.forEach((transacoes) => {
      tabela.innerHTML +=`
         <tr>
           <td>${transacoes.nome}</td>
           <td>${transacoes.email}</td>
           <td>R$ ${transacoes.moeda}</td>
           <td>${transacoes.pagamento}</td>
           <td>${transacoes.status}</td>
         
         
         </tr>
      
      
      
      `


    })
}



handleData()