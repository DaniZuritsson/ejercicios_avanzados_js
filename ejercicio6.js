/*Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante. */

function swap(array, index1, index2) {
  // Guardamos temporalmente el valor en index1
  const temp = array[index1]

  // Intercambiamos el valor de index1 por el de index2
  array[index1] = array[index2]

  // Colocamos el valor de temp en index2
  array[index2] = temp
  return array
}

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

console.log(swap(fantasticFour, 0, 2))
console.log(swap(fantasticFour, 1, 3))
