const livros = require('./lista-livros')

let maisBarato = 0;
let maisCaro = 0

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    }
}

for (let i = 0; i < livros.length; i ++) {
    if (livros[i].preco > livros[maisCaro].preco) {
        maisCaro = i
    }
}

console.log(`O livro mais barato custa ${livros[maisBarato].preco} reais e o título é ${livros[maisBarato].titulo}.
Já o livro mais caro custa ${livros[maisCaro].preco} reais e tem o título de ${livros[maisCaro].titulo}.`)