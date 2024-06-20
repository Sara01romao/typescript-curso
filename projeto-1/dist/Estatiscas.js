import countBy from "./countBy.js";
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatiscas {
    transacoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
    }
    setTotal() {
        return this.transacoes.filter(filtrarValor)
            .reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
    }
    setPagamento() {
        return countBy(this.transacoes.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transacoes.map(({ status }) => status));
    }
    setSemana() {
        const semana = {
            ['Domingo']: 0,
            ['Segunda-Feira']: 0,
            ['Terça-Feira']: 0,
            ['Quarta-Feira']: 0,
            ['Quinta-Feira']: 0,
            ['Sexta-Feira']: 0,
            ['Sábado']: 0
        };
        for (let i = 0; i < this.transacoes.length; i++) {
            const day = this.transacoes[i].data.getDay();
            if (day === 0)
                semana['Domingo'] += 1;
            if (day === 1)
                semana['Segunda-Feira'] += 1;
            if (day === 1)
                semana['Terça-Feira'] += 1;
            if (day === 2)
                semana['Quarta-Feira'] += 1;
            if (day === 2)
                semana['Quinta-Feira'] += 1;
            if (day === 2)
                semana['Sexta-Feira'] += 1;
            if (day === 2)
                semana['Sábado'] += 1;
        }
        return semana;
    }
    setMelhorDia() {
        return Object.entries(this.semana).sort((a, b) => {
            return b[1] - a[1];
        })[0];
    }
}
//# sourceMappingURL=Estatiscas.js.map