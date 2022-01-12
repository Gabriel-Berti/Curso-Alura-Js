const livros = require('./lista-livros')

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    for (let atual = 0; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato;
}

function maiorValor(arrProdutos, posicaoInicial) {
    let maisCaro = posicaoInicial
    for (let i = 0; i < arrProdutos.length; i ++) {
        if (arrProdutos[i].preco > arrProdutos[maisCaro].preco) {
            maisCaro = i
        }
    }
}

module.exports = menorValor, maiorValor;