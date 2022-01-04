const notas = [10, 9, 8, 7, 6];

// A diferença entre forEach e map, é que o map retorna algo, enquanto o forEach não.

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)