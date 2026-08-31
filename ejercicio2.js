//Ejercicio 2: Clasificación de notas

const nota = Number(prompt('Ingrese una nota entre 0 y 100:'));

if (nota < 0 || nota > 100 || isNaN(nota)) {
  console.log('La nota ingresada no es válida. Debe estar entre 0 y 100.');
} else if (nota < 60) {
  console.log('Resultado: Reprobado');
} else if (nota >= 60 && nota <= 69) {
  console.log('Resultado: Regular');
} else if (nota >= 70 && nota <= 79) {
  console.log('Resultado: Bueno');
} else if (nota >= 80 && nota <= 89) {
  console.log('Resultado: Muy bueno');
} else {
  console.log('Resultado: Excelente');
}
