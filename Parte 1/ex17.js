// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
// Ex17
// Faça um programa que receba uma data no formato "2020-12-31" e some uma semana a essa data.

"use strict"

let tDate = new Date('2020-12-31T00:00');

tDate.setDate(tDate.getDate()+7);
console.log(tDate);

/*let Day = tDate.getDate();
let Month = tDate.getMonth();
let Year = tDate.getFullYear();

let finalDate = new Date(Year, Month, Day + 7);
console.log(finalDate);*/