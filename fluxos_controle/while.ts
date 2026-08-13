// Laços de repetição while e do...while em TypeScript.

const condicao = true;

// Sintaxe do while
while (condicao) {
    // código
}

// Exemplo 1 — while
let contador = 0;
while (contador < 5) {
    // console.log(contador);
    contador++;
}

// Sintaxe do do...while
do {
    // código
} while (condicao);

// Exemplo 2 — do...while
let contador2 = 0;
do {
    // console.log(contador2);
    contador2++;
} while (contador2 < 5);

// Exemplo 3 — busca com while e break
let numero = 1;
while (numero < 20) {
    if (numero % 5 == 0) {
        console.log("O primeiro múltiplo de 5 é: " + numero);
        break;
    }
    numero++;
}
