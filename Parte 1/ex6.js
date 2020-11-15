// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
//## Ex6
// Use a mesma solução da questão anterior, mas agora com o número formatado como "(11) 99999-9999".

"use strict"
let fullPhoneNumber = "(11) 999999999";

/*let phoneNumber = fullPhoneNumber
    .split("")
    .filter((item) =>
        item.charCodeAt(0) >= "0".charCodeAt(0) && item.charCodeAt(0) <= "9".charCodeAt(0))
    .join("");*/

let phoneNumber = fullPhoneNumber
    .split("")
    .filter((item) => !isNaN(parseInt(item))).join("");

//let phoneNumber = fullPhoneNumber.match(/[0-9]/g).join("");
//let phoneNumber = fullPhoneNumber.match(/\d/g).join("");

let DDD = extractDDD(phoneNumber);
phoneNumber = extractPhoneNumber(phoneNumber);

console.log(DDD);
console.log(phoneNumber);

function extractDDD(fullphonenumber){  
    return fullphonenumber.slice(0, 2);
}

function extractPhoneNumber(fullphonenumber){
    return fullphonenumber.slice(2);
}