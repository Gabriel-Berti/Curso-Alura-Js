const alunos = ['João','Caio','Juliana','Ana']
const mediasAlunos = [10,7,9,6]

// Existem também arrays compostos de outros arrays, ou com mais de uma dimensão.

let listaGeral = [alunos, mediasAlunos]

// Para referenciar os elementos dessas arrays, devemos utilizar dois indices, o primeiro para referenciar qual array e o segundo para o elemento desse array.

console.log(`${listaGeral[0][0]}, sua média é ${listaGeral[1][0]}`)