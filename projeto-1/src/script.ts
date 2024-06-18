import fetchData from "./fetchData.js";

type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacoesStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando Pagamento" | "Estorada";

interface TransacaoAPI{
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacoesStatus;
    Email: string;
    ["Valor (R$)"]:string;
    ["Forma de Pagamento"]: TransacaoPagamento
    ["Cliente Novo"]: number;
}


async function handleData(){
    const data = await fetchData<TransacaoAPI[]> ("https://api.origamid.dev/json/transacoes.json");

    if(data){
        data.forEach((item)=>{
            console.log(item.Status)
        })
    }
    

}


handleData()