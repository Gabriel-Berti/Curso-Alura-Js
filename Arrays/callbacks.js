const nomes = ["Ana","Ju","Leo","Paula"];

function imprimeNomes (nome) {
    console.log(nome);
}
// O método forEach é um callback, porque ele é uma função que aceita como parâmetro outra função.
nomes.forEach(imprimeNomes);