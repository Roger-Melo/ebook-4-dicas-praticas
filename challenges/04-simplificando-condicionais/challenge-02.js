/*
Refatore o código à seguir, eliminando o if/else, mas mantendo a mesma lógica.

Exiba o resultado no console.
*/

const book = {
  title:    'Uma Breve História do Tempo',
  author:   'Stephen Hawking',
  language: 'Português',
  price: {
    kindle:    6.06,
    hardCover: 22.90,
    paperBack: 43.10
  }
}

const getBookTitle = (book) => {
  if (book && book.title)  {
    return book.title
  } else {
    return 'Unknown'
  }
}