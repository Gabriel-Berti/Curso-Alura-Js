class Cliente {
    constructor(nome,cpf,email,saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

// Acabamos de definir uma classe de cliente com uma série de propriedades (características) e comportamentos (métodos ou funções). 
// Vamos criar uma nova classe que vai herdar as características do cliente e terá um comportamento específico.

class ClientePoupanca extends Cliente {
    constructor(nome,cpf,email,saldo,saldoPoup){
        super(nome,cpf,email,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const gabriel = new ClientePoupanca("Gabriel","54612378974","gabriel@gmail.com", 850, 150)

gabriel.depositar(150)

gabriel.depositarPoup(850)

console.log(`Após os depósitos que foram feitos, o saldo da sua conta corrente é ${gabriel.saldo} reais e o da conta poupança é ${gabriel.saldoPoup} reais.`)

