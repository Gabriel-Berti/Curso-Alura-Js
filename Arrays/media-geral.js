const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
    // O método reduce, reduz os elementos do array em um elemento só, no caso abaixo ele está somando todos os números.
    // Esse método sempre tem dois parâmetros, o primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial - no caso, 0.
    // A função callback também recebe dois parâmetros, sendo o primeiro o valor acumulado e o segundo o valor atual.
    const somaDasNotas = notasDaSala.reduce((acum,atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`A média da sala de JS é : ${mediaSala(salaJS)}`)
console.log(`A média da sala de Java é : ${mediaSala(salaJava)}`)
console.log(`A média da sala de Python é : ${mediaSala(salaPython)}`)