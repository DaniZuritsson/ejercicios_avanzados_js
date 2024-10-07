/*Dado el siguiente código usa for of y for in para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
Es decir, la media de volumen de todos los volumenes juntos */

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

let totalVolume = 0
let count = 0

for (const user of users) {
  //recorremos la lista de usuarios
  for (const sound in user.favoritesSounds) {
    //recorremos los sonidos favoritos
    totalVolume += user.favoritesSounds[sound].volume //realizamos la sumatoria de ellos y guardamos en la variable creada anteriormente
    count++ //sumamos de uno en uno el número de sonidos para poder calcular la media
  }
}

const averageVolume = totalVolume / count
console.log(averageVolume)
