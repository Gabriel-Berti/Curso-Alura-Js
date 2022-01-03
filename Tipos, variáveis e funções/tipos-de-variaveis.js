"- Usando a variável do tipo 'var'. || A var permeia todo o código, podendo causar bugs em alguns casos, por esse motivo, a maioria dos programas hoje utiliza a variável 'let' no lugar da 'var'."
var altura = 5;
var comprimento = 5;

area = (altura * comprimento);

var area;
console.log(area);

"- Usando a variável do tipo 'let'. || Diferente da var, a let se contém em apenas um bloco de código, evitando que sua declaração interfira em outros blocos."
let forma = 'triangulo';
let altura = 5;
let comprimento = 12;

if (forma === 'retângulo') {
    area = (altura * comprimento);
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

"-Usando a variável do tipo 'const'. || A principal diferença desse tipo de variável em relação as outras utilizada anteriormente, é que depois de definida, ela não pode ser alterada e sua definição deve sempre vir junto com sua declaração"
const forma = 'triangulo';
const altura = 5;
const comprimento = 12;
let area;

if (forma === 'retângulo') {
    area = (altura * comprimento);
} else {
    area = (altura * comprimento) / 2;
}

console.log(area); 