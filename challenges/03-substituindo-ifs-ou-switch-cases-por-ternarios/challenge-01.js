/*
No código à seguir, escreva um if/else abaixo da função `isGreaterThanFour` que:

- Verifique se `quantity` é maior que 4. Se for, exiba no console a mensagem "[X] é maior que 4.". "[X]" deve ser o número que está sendo verificado (quantity).
- Caso contrário, exiba a mensagem "O número é menor que 4."
- Para evitar a repetição do 'console.log()', crie uma função 'showMessage' abaixo de 'isGreaterThanFour' e antes do if.
- Essa função deve receber, por parâmetro, a mensagem a ser exibida.

Depois de testar esse if/else, refatore-o para ternário =)
*/

const quantity = 3

const isGreaterThanFour = (aNumber) => aNumber > 4