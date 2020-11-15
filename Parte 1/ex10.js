// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
//## Ex10
// Com o mesmo programa do exercício passado, agora retorne quais são as palavras que começam com a letra recebida.

"use strict"

let textData = "Dóris sai de cima da pia";
let Character = "d";
let Words = [];

console.log(
    textData
    .toLowerCase()
    .split(" ")
    .filter((item) => item.charAt(0) === Character));