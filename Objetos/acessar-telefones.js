const cliente = {
    nome:"André",
    idade:36,
    cpf:"54612332145",
    email:"aquele@gmail.com",
    fones:["5591235498","5521987745"]
}

// Quando acessamos alguma informação, podemos utilizar os métodos relacionados ao tipo de dado dessa informação, no caso como estamos lidando com Array, podemos utilizar os métodos de Array.

cliente.fones.forEach(fone => console.log(fone))