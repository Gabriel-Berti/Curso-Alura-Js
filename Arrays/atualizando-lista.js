const listaDeChamada = ['João','Juliana','Lara','Ana','Julia','Giovanna','Bia']

// O método splice aceita três parâmentros, onde irá iniciar a alteração, quantos elementos queremos deletar e se quisermos colocar algo no lugar, utilizar o terceiro parâmetro.

listaDeChamada.splice(1,2,'Rodrigo')
console.log('Lista de chamada: ' + listaDeChamada)

// Também é possivel utilizar 0 no segundo parâmetro para não deletar nada e adicionar algo com o terceiro parâmetro.

listaDeChamada.splice(2,0,'Djonga')
console.log('Lista de chamada: ' + listaDeChamada)