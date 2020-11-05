// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
//## Ex3
// Usando os dois exercícios anteriores, crie um programa que separe os números de 1 a 100 em dois arrays, um com os pares e um com os ímpares.

"use strict"

let Numbers=[];

for (let i = 0; i < 100; i++){
    Numbers.push(i+1);
}

let Even=[];
let Odd=[];

for (let i = 0; i < Numbers.length; i++){

    if (isEven(Numbers[i]))
        Even.push(Numbers[i]);

    else
        Odd.push(Numbers[i]);
}

function isEven(number){
    return number % 2 === 0
}

//for (let i = 0; i < Even.length; i++)
//    console.log(Even[i]);

//for (let i = 0; i < Even.length; i++)
//console.log(Odd[i]);