// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
// Ex12
// Faça um programa que receba 3 números e imprima o menor e o maior entre eles.

"use strict"

let Numbers = [4,2,6];

Numbers.sort();
console.log(Numbers[0]);
console.log(Numbers[Numbers.length-1]);

let Num1 = 2;
let Num2 = 6;
let Num3 = 5;

let Lowest = Math.min(Num1, Num2, Num3);
let Highest = Math.max(Num1, Num2, Num3);

console.log(Lowest);
console.log(Highest);