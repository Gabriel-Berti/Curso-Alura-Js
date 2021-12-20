"No JS, temos duas formas para converter um tipo de dado para outro, são as chamadas conversão implícita e conversão explícita."

// conversão implícita

"Na conversão implícita, nós comparamos apenas o conteúdo de um tipo de dado. Então, se tivermos uma variável do tipo string que tem como conteúdo um número, podemos compará-lo com uma variável number utilizando '=='."

const numero = 278;
const numeroString = "278";

console.log(numero == numeroString); // o resultado dessa comparação é true.

// conversão explícita

"Já na conversão explícita, declaramos o tipo de dado para o qual queremos transformar antes da definição da variável."

const numero = 278;
const numeroString = "278";

console.log(numero + Number(numeroString)); // nesse caso a soma será feita normalmente, porque "tranformamos" o tipo de dado da variavél.

console.log(numero + numeroString.toNumber()); // essa é outra forma de transformar uma string em um dado do tipo number.