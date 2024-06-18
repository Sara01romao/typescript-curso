import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
// import { TransacaoAPI } from "./normalizarTransacao.js";



async function handleData(){
    const data = await fetchData<TransacaoAPI[]> ("https://api.origamid.dev/json/transacoes.json?");

    if(!data) return;

    const transacoes = data.map(normalizarTransacao);
   

    preecherTabela(transacoes)
    

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