// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
//## Ex4
// Crie um programa que monte um array com os valores de 1 a 100 e que encontre um valor recebido dentro desse array.

"use strict"

let Numbers=[];
let Value = 32;

for (let i = 0; i < 100; i++){
    Numbers.push(i + 1);
}

//Usando findIndex
let Index1 = Numbers.findIndex((requestValue) => requestValue === Value);

console.log(Index1);
console.log(Numbers[Index1]);

//Usando indexOf
let Index2;
Index2 = Numbers.indexOf(Value);
console.log(Index2);
console.log(Numbers[Index2]);
