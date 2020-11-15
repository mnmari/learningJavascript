// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
//## Ex9
// Faça um programa que receba um texto, uma letra e que conte quantas palavras do texto começam com a letra recebida.

"use strict"

//Forma 1
let textData = "Dóris sai de cima da pia";
let Character = "d";
let Counter = 0;

let Length = textData
    .toLowerCase()
    .split(" ")
    .filter((item) => item.charAt(0) === Character)
    .length;

console.log(Length);

//Forma 2
/*let textData = "Dóris sai de cima da pia";
let Character = "d";

function prepareText(text){
    text = text.toLowerCase();
    
    let textArray = [];
    return textArray = text.split(" ");
}  

function countFirstLetters(text, character){
    let occurrences = 0;

    for (let i = 0; i < text.length; i++){
        if (text[i].charAt(0) === character){
            occurrences++;
        }
    }
    return occurrences;
}

let preparedText = prepareText(textData);
let qtyLetters = countFirstLetters(preparedText, Character);
console.log(qtyLetters);*/