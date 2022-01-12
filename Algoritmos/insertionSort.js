const livros = require('./lista-livros')

function trocar(lista, indice) { // Para enxugar o código, podemos tirar o processo de troca de item atual e item anterior e transformar ele em uma função.
    let itemAtual = lista[indice];
    let itemAnterior = lista[indice - 1];

    lista[indice] = itemAnterior
    lista[indice - 1] = itemAtual
}



function insertionSort(lista) {
    for(let atual = 1; atual < lista.length; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise -1].preco) {
            trocar(livros, analise)
            analise--
        }
    }
    console.log(livros)
}

insertionSort(livros)
