// Criar uma const
// Atribuir a const uma função anônima (arrow function)
// Que recebe um console.log() Hello Word!
// Abrir o terminal e rodar o arquivo global.js

// exemplo1
const eae = 'Eae mundãoooo';

console.log(eae);

// exemplo2
const eae2 = console.log('Eae mundãoooo');

console.log(eae2);

// exemplo3
const eae3 = () => {
    console.log('Eae mundãoooo');
}

console.log(eae3);

//exemplo4
const eae4 = () => {
    console.log('Eae mundãoooo');
}

eae4();

//exemplo5
const eae5 = function oi() {
    console.log('Eae mundãoooo');
}

eae5();