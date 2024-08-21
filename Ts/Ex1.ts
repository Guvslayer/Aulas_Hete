// Definindo a interface Produto
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

// Definindo o tipo de união FormaPagamento
type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

// Criando a função para exibir as informações do produto e a forma de pagamento
function exibirDetalhesProduto(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}. Forma de pagamento escolhida: ${pagamento}.`;
}

// Exemplo de uso:
const meuProduto: Produto = {
    nome: 'Notebook',
    preco: 3500.00,
    categoria: 'Eletrônicos'
};

const formaDePagamento: FormaPagamento = 'cartão';

console.log(exibirDetalhesProduto(meuProduto, formaDePagamento));
