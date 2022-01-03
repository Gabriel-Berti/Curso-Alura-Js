const nomes = ['João','Juliana','Lara','Ana','Julia','Giovanna','Bia','Rafaela','Renata','Gabriel','Carlos','Isabela','Maria','Andre','Thiago','Marcelo','Roberto']

// O método slice divide o array de acordo com dois parâmetros, o primeiro parâmetro é onde o corte inicia e o segundo é onde o corte irá parar, lembrando que o corte para 
// antes do segundo parâmetro. Caso não for especificado o segundo parâmetro, o corte irá iniciar no primeiro parâmetro e parar no ultimo elemento do array.

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 1: ${sala2}`)