// Estruturas condicionais if/else em TypeScript.

const condicao = true;

if (condicao) {
    // código executado se a condição for verdadeira
    // console.log("condição verdadeira");
} else {
    // código executado se a condição for falsa
    // console.log("condição falsa");
}

// Exemplo 1 — uso do if
const max = 100;
let counter = 100;

if (counter < max) {
    counter++;
}
// console.log(counter);

// Exemplo 2 — uso do if com else
const idade = 16;

if (idade >= 18) {
    // console.log("Maior de idade");
} else {
    // console.log("Menor de idade");
}

// Exemplo 3 — uso do if com else if
let desconto: number;
let itemContador: number = 14;

if (itemContador > 0 && itemContador < 5) {
    desconto = 0.05;
} else if (itemContador >= 5 && itemContador < 10) {
    desconto = 0.1;
} else if (itemContador >= 10) {
    desconto = 0.15;
} else {
    desconto = 0;
}
console.log(desconto);

// Exemplo 4 — uso do operador ternário
let idadeVotacao: number = 18;
let status = idadeVotacao >= 18 ? "pode votar" : "não pode votar";
console.log(status);
