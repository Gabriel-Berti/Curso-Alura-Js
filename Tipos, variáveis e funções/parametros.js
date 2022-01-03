// Parâmetros da Função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(8 + 9))

// Ordem dos Parâmetros

function nomeIdade(nome,idade) {
    return `Meu nome é ${nome} e minha idade é ${idade} anos.`;
}

// Se na função acima trocarmos a ordem dos parâmetros, os dados ficarão invertidos, já que o JS divide os dados que estão entrando nos parâmetros da esquerda pra direita.

//O '= 1', serve para colocar um valor padrão para os parâmetros.
function multiplica(num1 = 1, num2 = 1) { 
    return num1 * num2;
}

console.log(multiplica(soma(4,8), soma(6,8)))