class Cliente {
    constructor(nome, cpf, email, saldo){
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

class ClientePoupanca extends Cliente {
    constructor(nome,cpf,email,saldo,saldoPoup){
        super(nome,cpf,email,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const gabrielPoup = new ClientePoupanca ("Gabriel","54622145678","gabriel@gmail.com", 100, 200)

console.log(gabrielPoup)