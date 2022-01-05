const cliente = {
    nome:"André",
    idade:36,
    cpf:"54612332145",
    email:"aquele@gmail.com",
    fones:["5591235498","5521987745"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"Filha",
    dataNasc:"20/03/2011"
}

//Podemos alterar as informações do objeto que está dentro de outro dessa forma.

cliente.dependentes.nome = "Sara Silva"