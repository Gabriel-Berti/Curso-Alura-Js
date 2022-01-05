const cliente = {
    nome:"André",
    idade:36,
    cpf:"54612332145",
    email:"aquele@gmail.com",
    fones:["5591235498","5521987745"],
    dependentes: [
        {
        nome:"Sara",
        parentesco:"Filha",
        dataNasc:"20/03/2011"
        },
        {
        nome:"Samia Maria",
        parentesco:"Filha",
        dataNasc:"01/01/2014"
        }
    ],
    saldo:100,

    // Podemos utilizar funções dentro dos objetos, para adicionar um método a ele, uma "ação".
    
    depositar: function(valor){
    // O this, se refere ao objeto em que a função está.
        this.saldo += valor
    }
}

console.log(cliente.saldo)

cliente.depositar(30)

console.log(`Após depositar 30 dinheiros, o seu saldo é: ${cliente.saldo}`)