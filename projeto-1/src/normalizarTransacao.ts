import moedaParaNumero from "./moedaPraNumero.js";
import stringToDate from "./stringToDate.js";


declare global{

type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacoesStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando Pagamento" | "Estorada";

export interface TransacaoAPI{
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacoesStatus;
    Email: string;
    ["Valor (R$)"]:string;
    ["Forma de Pagamento"]: TransacaoPagamento
    ["Cliente Novo"]: number;
}

interface Transacao{
    nome:string;
    id:number;
    data:Date;
    status:TransacoesStatus;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
}

}



export default function normalizarTransacao(transacao:TransacaoAPI):Transacao{

    return{
        nome:transacao.Nome,
        id:transacao.ID,
        data: stringToDate(transacao.Data),
        status:transacao.Status,
        email: transacao.Email,
        moeda: transacao["Valor (R$)"],
        valor: moedaParaNumero(transacao["Valor (R$)"]),
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"]),
    }

}