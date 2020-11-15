// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
//## Ex11
// Faça um programa que receba uma string e imprima ela ao contrário.

"use strict"

let textData = "Dóris sai de cima da pia";
textData = textData.split("");

console.log(textData.reverse().join(""));

let textBackwards = [];
let textLength = textData.length;

for(let i = 0; i < textLength; i++)
    textBackwards.push(textData.pop()); 


console.log(textBackwards.join(""));

