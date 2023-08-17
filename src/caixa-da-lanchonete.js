class CaixaDaLanchonete {
    constructor() {
        this.menu = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };      
        this.extras = {
            chantily: "cafe",
            queijo: "sanduiche"
        };
    }
    calcularValorDaCompra(formaDePagamento, itens) {
        let total = 0;
        if (itens.length === 0) return "Não há itens no carrinho de compra!";
        if (!['debito', 'credito', 'dinheiro'].includes(formaDePagamento)) return "Forma de pagamento inválida!";
        
        for (let item of itens) {
            const [codigo, quantidade] = item.split(',');
            if (!this.menu[codigo]) return "Item inválido!";
            if (Number(quantidade) <= 0) return "Quantidade inválida!";
            if (this.extras[codigo] && !itens.some(i => i.startsWith(this.extras[codigo]))) {
                return "Item extra não pode ser pedido sem o principal";
            }

            total += this.menu[codigo] * Number(quantidade);
        }
        if (formaDePagamento === 'dinheiro') {
            total *= 0.95;
        } else if (formaDePagamento === 'credito') {
            total *= 1.03;
        }
        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}
export { CaixaDaLanchonete };

