const cliente = {
    nome:"André",
    idade:36,
    cpf:"54612332145",
    email:"aquele@gmail.com",
    fones:["5591235498","5521987745"],
    dependentes: [{
        nome:"Sara",
        parentesco:"Filha",
        dataNasc:"20/03/2011"
        }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"Filha",
    dataNasc:"01/01/2014"
})

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome)