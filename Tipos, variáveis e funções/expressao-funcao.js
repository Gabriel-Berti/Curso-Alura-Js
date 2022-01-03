//declaração de função

function minhaFuncao (param) {

}


//expressão de função

const soma = function(num1,num2) {return num1+num2}
console.log(soma(1,1));

//principal diferença: HOISTING
//funções e var são "listadas" no topo do código

console.log(apresentar()) //isso funcionará pois o JS lista functions e vars no topo do código
function apresentar() {
    return "olá";
}

console.log(soma(1,1)) //isso não funcionará pois a const não foi declarada antes
const soma = function(num1,num2) {return num1+num2}