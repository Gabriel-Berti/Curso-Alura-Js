class Cliente {
    constructor(nome, cpf, email, saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
    // Nas definições de métodos das classes, não é utilizado a mesma declaração que usamos quando definimos um método utilizando a função constructor que vimos anteriormente.  
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const gabriel = new Cliente("gabriel","54654122278","gabriel@gmail.com","150")

console.log(gabriel)