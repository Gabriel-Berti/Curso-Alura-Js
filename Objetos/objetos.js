// Essa é a estrutura de um objeto.

const cliente = {
    nome:"André",
    idade:36,
    cpf:"54612332145",
    email:"aquele@gmail.com"
}

// Conseguimos acessar as informações de um objeto através do ponto seguido da chave que você quer acessar.

console.log(`Meu nome é ${cliente.nome}, e tenho ${cliente.idade} anos.`)

// Também conseguimos utilizar métodos após acessar alguma informação da chave do objeto.

console.log(cliente.cpf.substring(0,3))