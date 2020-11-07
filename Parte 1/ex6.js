// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
//## Ex6
//Use a mesma solução da questão anterior, mas agora com o número formatado como "(11) 99999-9999".

"use strict"
let fullPhoneNumber = "(11) 999999999";

let DDD = extractDDD(fullPhoneNumber);
let phoneNumber = extractPhoneNumber(fullPhoneNumber);

console.log(DDD);
console.log(phoneNumber);

function extractDDD(fullphonenumber){  
    return fullphonenumber.slice(1, 3);
}

function extractPhoneNumber(fullphonenumber){
    return fullphonenumber.slice(5, fullphonenumber.length + 1);
}





