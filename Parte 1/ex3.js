// Parte 1
// Para todos os exercícios dessa primeira parte, considere que o seu input vão ser sempre variáveis no início do seu arquivo.
//## Ex3
// Usando os dois exercícios anteriores, crie um programa que separe os números de 1 a 100 em dois arrays, um com os pares e um com os ímpares.

let Numeros=[], Pares=[], Impares=[];

for (i = 0; i < 100; i++){
    Numeros[i] = i + 1;
}

let indicePar = 0, indiceImpar = 0;
for (i = 0; i < 100; i++){

    if (Numeros[i] % 2 == 0){
        Pares[indicePar] = Numeros[i];
        indicePar++;
    }
   
    else{
    Impares[indiceImpar] = Numeros[i];
    indiceImpar++;
    }
}

//for (i = 0; i < Pares.length; i++){
//    console.log(Pares[i]);
//}

//for (i = 0; i < Impares.length; i++){
//    console.log(Impares[i]);
//}
