/*1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos. */

const neg = 'No se encuentra en el array'
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    //recorremos el array
    if (array[i] === text) {
      //si el valor del array es igual al del texto, devolvemos su posición
      return i
    }
  }
  return neg // Si el texto no está en el array, devuelve este mensaje
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
console.log(findArrayIndex(mainCharacters, 'Leia'))
console.log(findArrayIndex(mainCharacters, 'Han Solo'))
console.log(findArrayIndex(mainCharacters, 'Rey'))
console.log(findArrayIndex(mainCharacters, 'Yoda'))

/*Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.
Finalmente retorna el array.
De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/

function removeItem(array, text) {
  const index = findArrayIndex(array, text)

  if (index !== neg) {
    array.splice(index, 1) // Elimina el elemento en la posición index
    return array
  } else {
    return text + ' no ha sido encontrado en el array'
  }
}

console.log(removeItem(mainCharacters, 'Leia'))
console.log(removeItem(mainCharacters, 'Han Solo'))
console.log(removeItem(mainCharacters, 'Yoda'))
console.log(removeItem(mainCharacters, 'Rey'))
