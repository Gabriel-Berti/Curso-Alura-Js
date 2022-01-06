function cliente(nome,cpf,email,saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const gabriel = new cliente("Gabriel","50078796954","berti@gmail.com",265)

console.log(gabriel)