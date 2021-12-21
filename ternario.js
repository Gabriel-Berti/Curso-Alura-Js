const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
    console.log("Pra você uma cervejinha !")
} else {
    console.log("Pra você um suco de malandro !")
}

// No JS, quando temos um if simples como o mostrado acima, é uma boa prática utilizar o operador ternário para diminuir o código.

// A estrutura do operador ternário é essa :
                   /* Condição */             /* Se for true */                 /* Se for false */
console.log(idadeCliente >= idadeMinima ? "Pra você uma cervejinha !" : "Pra você um suco de malandro !")