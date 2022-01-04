const nomes = ['Ana','Marcos','Maria','Mauro']
const notas = [7, 4.5, 8, 7.5]

// O método filter retorna um valor booleano, se a condição na função descrita for atendida, retorna true, caso contrário retorna false.

// Como o primeiro parâmetro não será utilizado na função, colocamos um _ para declará-lo e dizer ao JS que não está sendo utilizado.
const reprovados = nomes.filter( (_, indice) => notas[indice] < 5)

console.log("Reprovados: " + reprovados) 