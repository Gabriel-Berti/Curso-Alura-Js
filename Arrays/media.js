//Um array é uma estrutura de dados que diferente de uma variável, pode guardar mais de um valor por vez, os dados dentro desse array se comportam como uma lista ordenada, onde cada 
//valor (elemento) tem sua posição (indice), começando sempre do zero.

//indice        0   1   2   3   
const notas = [10, 6.5, 8, 7.5]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)