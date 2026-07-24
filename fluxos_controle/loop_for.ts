//Sitaxe
/*
for (inicialização; condição; incremento) {
    // codigo
}
*/
// Exemplo
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Exemplo 2 - for of
const arrayNumeros: number[] = [1, 2, 3, 4, 5];

for (const numero of arrayNumeros) {
    console.log(numero);
}

// Exemplo 3 - for in
const arrayNumeros_2 = [5, 4, 3, 2, 1, 0];

for (const index in arrayNumeros_2) {
    console.log(arrayNumeros_2[index]);
}
