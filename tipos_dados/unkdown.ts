// Tipo unknown
// Similar ao any - usado quando não se sabe o tipo da variável
// Diferença: unknown requer verificação de tipo antes de ser usado por parte do compilador

let valorDesconhecido: unknown;
valorDesconhecido = true;
valorDesconhecido = "ola";
valorDesconhecido = 42;
valorDesconhecido = [1, 2, 3];

// Usando unknown requer verificação de tipo
if (typeof valorDesconhecido === "string") {
    console.log(valorDesconhecido);
} // não vai printar nada pois o último valor atribuido foi um array


// Exemplo 1
let valorVariavel: unknown;
valorVariavel = true;
valorVariavel = "string qualquer";
valorVariavel = 42;
valorVariavel = [];

// Exemplo 2
let valor: unknown;
// let valor1: boolean = valor; - com erro pois variavel tipada não pode receber valor unknown sem verificação de tipo

// Correto
let valor1: boolean;
valor1 = valor as boolean; // explicita que a variavel deve ser lida como boolean

// Exemplo 3 - diferença entre any e unknown
let valorAny: any;
let valorUnknown: unknown;

//console.log(valorAny.toFixed(2)); // funciona
//console.log(valorUnknown.toFixed(2)); // erro: Object is of type 'unknown'

//correto
if (typeof valorUnknown === "number") { //verificação de tipo antes de atribuir valor
    console.log(valorUnknown.toFixed(2));
}