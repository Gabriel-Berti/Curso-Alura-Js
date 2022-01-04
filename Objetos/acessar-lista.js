const cliente = {
    nome:"André",
    idade:36,
    cpf:"54612332145",
    email:"aquele@gmail.com"
}

// Outra forma de acessar os dados das chaves de um objeto é utilizando um array com as chaves desse cliente.

const chaves = ["nome","idade","cpf","email"]

console.log(cliente[chaves[0]])

// Para acessar todos os dados das chaves de um objeto podemos usar o forEach por exemplo.

chaves.forEach(info => console.log(cliente[info]))