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
    depositar: function(valor){
        this.saldo += valor
    }
}

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj); // O método Object.keys, nos retorna um Array com todas as chaves do objeto no parâmetro.
    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente)