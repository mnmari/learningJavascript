// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
// Ex13
// Faça um programa que receba um array com 5 números e imprima o menor e o maior entre eles.

"use strict"

let Numbers = [4,2,6,7,5];

Numbers.sort();
console.log(Numbers[0]);
console.log(Numbers[Numbers.length-1]);