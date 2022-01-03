const alunos = ['João','Caio','Juliana','Ana']
const mediasAlunos = [10,7,9,6]

let listaGeral = [alunos, mediasAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaGeral[0].includes(nomeDoAluno)) { // O método includes retorna uma valor booleano, é uma verificação se o valor no parâmetro existe na array em questão.
        let indice = listaGeral[0].indexOf(nomeDoAluno) // O método indexOf, retorna a posição na lista do elemento que foi colocado no parâmetro.
        return listaGeral[0][indice] + ", sua média é " + listaGeral[1][indice]
    } else {
        return "Esse aluno não consta no sistema."
    }
}

console.log(exibeNomeNota('Ana'))