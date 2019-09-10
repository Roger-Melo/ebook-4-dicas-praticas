const getDay = () => Math.floor(Math.random() * 7) + 1
const showMessage = (day) => console.log(`The day is ${day}`)

/*
Escreva um switch/case que dê match com o valor de getday().

getday(), quando invocada, retorna um número de 1 à 7.

Se o retorno de getday() é 1, exiba no console 'The day is Sunday'.

Caso seja 2, a mesma mensagem deve ser exibida, mas o dia deve
ser 'Monday'. Essa sequência deve se repetir até 'Saturday', que
corresponde ao número 7.

Para testar se todos os casos possíveis que você escreveu estão
funcionando, após executar o switch pela 1ª vez e ver o resultado
no console, modifique o retorno de getDay para um número entre
1 e 7 (pode ser manualmente) e veja se o dia da semana corresponde
ao número retornado =)
*/