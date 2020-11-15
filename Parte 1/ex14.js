// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
// Ex14 
// Faça um programa que receba um array com número e imprima um array com todos os seus valores ao quadrado.

"use strict"

let Numbers = [2, 5, 6, 2, 1];
let Numbers2 = Numbers.map(toPower);

function toPower(number){
    return Math.pow(number, 2);
}

console.log(Numbers2);