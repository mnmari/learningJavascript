// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
//## Ex5
//Crie um programa que receba um número de telefone com DDD e separe o DDD do telefone.
//Formatação do número: 11999999999

"use strict"

//String
let stringFullPhoneNumber = "11999999999";
let stringDDD = extractDDD(stringFullPhoneNumber);
let stringPhoneNumber = extractPhoneNumber(stringFullPhoneNumber);

console.log(stringDDD);
console.log(stringPhoneNumber);

function extractDDD(fullphonenumber){  
    return fullphonenumber.slice(0, 2);
}

function extractPhoneNumber(fullphonenumber){
    return fullphonenumber.slice(2);
}

//Array
let arrayFullPhoneNumber = stringFullPhoneNumber.split("");
let arrayDDD=[];
let arrayPhoneNumber=[];

for (let i of arrayFullPhoneNumber){
    if(i < 2)
        arrayDDD.push(arrayFullPhoneNumber[i]);
    else
        arrayPhoneNumber.push(arrayFullPhoneNumber[i])
}

console.log(arrayDDD.join(""));
console.log(arrayPhoneNumber.join(""));
