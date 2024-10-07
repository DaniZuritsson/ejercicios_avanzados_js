/*Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
Que la función use el parametro para simular una tirada de dado y retornar el resultado.
*/

function rollDice(caras) {
  return Math.floor(Math.random() * caras) + 1 //con Math.floor redondeamos a la baja el valor. Math.random() escoge un valor aleatorio entre 0 y 1 (sin incluir el 1).
}

// Simulamos dados con las diferentes caras
console.log(rollDice(6)) //el problema que me da es que al introducir el redondeo a la baja, es imposible que tome el mayor valor
console.log(rollDice(10))
console.log(rollDice(20))
