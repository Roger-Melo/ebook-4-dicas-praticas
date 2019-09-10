/*
No código à seguir, abaixo da função getDefaultMessage, declare a função que está sendo invocada na penúltima linha, `getFruitColor`.

Essa função irá encapsular o switch/case que você escrever.

Este switch/case deve dar match com as frutas do array. Ao dar match, a função `getFruitMessage` deverá retornar a mensagem de acordo com a cor da fruta.

Teste o código no console. O resultado deve ser a seguinte string:

Strawberry is a red fruit.
Kiwi is a green fruit.
Banana is a yellow fruit.

Escreva também uma alternativa em que o match com a fruta não aconteça.

Já existe uma função que retorna uma mensagem desse tipo...

Tudo certo até aqui? Vamos para a 2ª etapa =D

Refatore o switch/case para um objeto, implementando também um fallback equivalente ao 'default'.

Dica: envolva as keys do seu objeto em colchetes:

[propertyName]: 'property value'

Essa feature se chama Dynamic Property Keys. Ela possibilita que você utilize uma variável como propriedade do objeto =)

Teste seu código no console.
*/


const strawberry = 'Strawberry'
const kiwi = 'Kiwi'
const banana = 'Banana'

const fruits = [ strawberry, kiwi, banana ]

const getFruitMessage = (fruit, color) => `${fruit} is a ${color} fruit.`
const getDefaultMessage = () => 'Fruit was not found'

// escreva seu código aqui

console.log(
  fruits.reduce((acc, _, index, array) =>
    `${acc} ${getFruitColor(array[index])}\n`, '')
)