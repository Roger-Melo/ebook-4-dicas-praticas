/*
No código à seguir, refatore o if/else-if/else utilizando ternários encadeados.

Para evitar a repetição do 'userPosition === XXX', escreva uma função que retorne o resultado dessa verificação.
*/

const userPosition = 'Stranger'

const showMessage = (message) => console.log(message)

if (userPosition === 'Employee') {
  showMessage('Wellcome, my friend =D')
} else if (userPosition === 'Director') {
  showMessage('Hello =)')
} else if (userPosition === 'Stranger') {
  showMessage('Hello, Stranger')
} else {
  showMessage('Hi, Unidentified')
}