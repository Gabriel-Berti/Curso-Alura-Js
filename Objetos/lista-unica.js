const clientes = [{
    nome:"André",
    idade:36,
    cpf:"54612332145",
    email:"aquele@gmail.com",
    fones:["5591235498","5521987745"],
    saldo:100,
    depositar: function(valor){this.saldo += valor},
    dependentes: [{
        nome:"Sara",
        parentesco:"Filha",
        dataNasc:"20/03/2011"
        },
        {
        nome:"Samia Maria",
        parentesco:"Filha",
        dataNasc:"01/01/2014"
    }]
},
{
    nome:"Juliana",
    cpf:"45654456556",
    dependentes: [{
        nome:"Sophia",
        parentesco:"Filha",
        dataNasc:"30/08/2020"
    }]
}];

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes] // O operador de espalhamento ... pega as informações da chave que foi requisitada e retorna em um novo array.

console.log(listaDependentes)