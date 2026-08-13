// Laços de repetição for, for...of e for...in em TypeScript.

// Sintaxe do for
/*
for (inicialização; condição; incremento) {
    // código
}
*/

// Exemplo 1 — for tradicional
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Exemplo 2 — for...of (itera sobre os valores do array)
const arrayNumeros: number[] = [1, 2, 3, 4, 5];

for (const numero of arrayNumeros) {
    console.log(numero);
}

// Exemplo 3 — for...in (itera sobre os índices do array)
const arrayNumeros2 = [5, 4, 3, 2, 1, 0];

for (const index in arrayNumeros2) {
    console.log(arrayNumeros2[index]);
}
