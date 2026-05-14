// O tipo never não contém valores
// é usado em funções que nunca retornam nada
// ou seja é usado para lançar um erro ou exceção

// Exemplo 1
function error(message: string): never {
    throw new Error(message);
}
console.log(error("Erro 01"));

// Exemplo 2: never inferido automaticamente
function rejectMessage(){
    return error("Erro 02");
}
console.log(rejectMessage());

// Exemplo 3: loop infinito
const loopInfinito = function loop() { // never - não vai retornar nada
    while(true) {
        // faz algo
    }
}
// console.log(loopInfinito()); // não vai rodar pois é um loop infinito

// Exemplo 4: never X void
// const variavelNever: never = null; // ERRO: never não pode receber nenhum valor
const variavelVoid: void = undefined; // void - pode retornar undefined
// console.log(variavelNever); // variável não existe mais
console.log(variavelVoid);