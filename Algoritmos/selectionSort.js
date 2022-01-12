const livros = require('./lista-livros')
const menorValor = require('./menorMaiorValor')

for(let atual = 0; atual < livros.length - 1; atual ++) {
    let menor = menorValor(livros, atual)
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

// Ao invés de utilizarmos o for, podemos também escrever esse algoritmo com o método forEach().

livros.forEach((_,atual) => {
    let menor = menorValor(livros, atual)
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];
    
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
})

console.log(livros)