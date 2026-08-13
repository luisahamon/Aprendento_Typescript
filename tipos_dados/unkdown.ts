// Tipo unknown em TypeScript: tipo seguro para valores desconhecidos.

// O tipo unknown é similar ao any — usado quando não se sabe o tipo da variável.
// A diferença: unknown exige verificação de tipo antes de ser usado pelo compilador.

let valorDesconhecido: unknown;
valorDesconhecido = true;
valorDesconhecido = "ola";
valorDesconhecido = 42;
valorDesconhecido = [1, 2, 3];

// Usando unknown requer verificação de tipo.
if (typeof valorDesconhecido === "string") {
    console.log(valorDesconhecido);
} // não vai exibir nada, pois o último valor atribuído foi um array

// Exemplo 1
let valorVariavel: unknown;
valorVariavel = true;
valorVariavel = "string qualquer";
valorVariavel = 42;
valorVariavel = [];

// Exemplo 2
let valor: unknown;
// let valor1: boolean = valor; // erro: variável tipada não pode receber unknown sem verificação

// Correto
let valor1: boolean;
valor1 = valor as boolean; // afirma explicitamente que o valor deve ser lido como boolean

// Exemplo 3 — diferença entre any e unknown
let valorAny: any;
let valorUnknown: unknown;

// console.log(valorAny.toFixed(2)); // funciona
// console.log(valorUnknown.toFixed(2)); // erro: Object is of type 'unknown'

// Correto
if (typeof valorUnknown === "number") { // verificação de tipo antes de usar o valor
    console.log(valorUnknown.toFixed(2));
}
