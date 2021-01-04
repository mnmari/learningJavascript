// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
// Ex16
// Faça um programa que imprima a data e hora de agora.

"use strict"

let tDate = new Date();
let Day = [tDate.getDate(),
                tDate.getMonth()+1,
                tDate.getFullYear()]
                .join("/");
let Hour = [tDate.getHours(),
            tDate.getMinutes(),
            tDate.getSeconds()]
            .join(":");

console.log(Day);
console.log(Hour);
console.log(tDate.toLocaleString());