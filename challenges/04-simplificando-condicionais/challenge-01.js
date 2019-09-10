/*
Considerando o código à seguir, refatore os '||' que o if possui e exiba o resultado no console.
*/

const firstDog =  { name: 'Bill',    age: 11, gender: 'Male',   breed: 'Golden Retriever' }
const secondDog = { name: 'Apolo',   age: 11, gender: 'Male',   breed: 'Golden Retriever' }
const thirdDog =  { name: 'Melissa', age: 9,  gender: 'Female', breed: 'Golden Retriever' }

const checkDog = ({ name, breed }) => {
  if (name === 'Apolo' || name === 'Bill' || name === 'Melissa')
    return `The dog is a ${breed}`
}