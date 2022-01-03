const nome = "Gabriel";
const idade = "21";
const cidadeDeNascimento = "São Paulo";

//Exemplo: const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

//String Template: Antigamento no JavaScrip, tinhamos que fazer muitas quebras e concatenações como mostrado no exemplo acima para montar uma string. Porém depois do ES6, foi implementado
//                 o string template, que é uma função que nos ajuda a escrever uma string de forma mais eficiente.

const apresentacao = `Meu nome é ${nome}, tenho ${idade} anos e nasci na cidade de ${cidadeDeNascimento}.`;
console.log(apresentacao);