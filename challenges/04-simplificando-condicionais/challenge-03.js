/*
Refatore o código à seguir, removendo o 'for' e o 'if', mas mantendo a mesma lógica de testar todos os itens do array.

Exiba, no console, o valor booleano que indica se 👉todos👈 os Filmes são da Disney.
*/

const movies = [
  { title: 'Avengers: Endgame',         distributedBy: 'Disney'        },
  { title: 'Spider-Man: Far From Home', distributedBy: 'Sony Pictures' },
  { title: 'The Lion King',             distributedBy: 'Disney'        }
]

function testDisneyMovies (movies) {
  let isAllDisneyMovies = true

  for (let movie of movies) {
    if (!isAllDisneyMovies)
      return false

    isAllDisneyMovies = (movie.distributedBy === 'Disney')
  }

  return isAllDisneyMovies
}