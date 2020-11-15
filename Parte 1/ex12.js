// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
// Ex12
// Faça um programa que receba 3 números e imprima o menor e o maior entre eles.

"use strict"

let Numbers = [4,2,6];

Numbers.sort();
console.log(Numbers[0]);
console.log(Numbers[Numbers.length-1]);

let Lowest = Math.min(...Numbers);
let Highest = Math.max(...Numbers);

console.log(Lowest);
console.log(Highest);