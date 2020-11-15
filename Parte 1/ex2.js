// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
// Ex2
//Crie um programa que receba um número e retorne se ele é par ou ímpar.

"use strict"

let Numbers = 104;

if (isEven(Numbers))
    console.log("O número é par.");
else
    console.log("O número é impar.");

function isEven(number){
    return number % 2 === 0
}