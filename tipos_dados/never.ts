// Tipo never em TypeScript: representa valores que nunca ocorrem.

// O tipo never não contém valores.
// É usado em funções que nunca retornam nada,
// como funções que lançam um erro ou exceção, ou loops infinitos.

// Exemplo 1
function error(message: string): never {
    throw new Error(message);
}
console.log(error("Erro 01"));

// Exemplo 2 — never inferido automaticamente
function rejectMessage() {
    return error("Erro 02");
}
console.log(rejectMessage());

// Exemplo 3 — loop infinito
const loopInfinito = function loop() { // never — não vai retornar
    while (true) {
        // faz algo
    }
};
// console.log(loopInfinito()); // não vai rodar, pois é um loop infinito

// Exemplo 4 — never vs void
// const variavelNever: never = null; // ERRO: never não pode receber nenhum valor
const variavelVoid: void = undefined; // void — pode receber undefined
// console.log(variavelNever); // variável não existe mais
console.log(variavelVoid);
