// Generics em TypeScript: funções e tipos que trabalham com vários tipos de dados.

// Permite criar funções, classes e tipos que trabalham com vários tipos de dados,
// tornando o programa flexível e escalável a longo prazo.

// Exemplo
function retornarElementosRandomicos<T>(items: T[]): T {
    if (items.length === 0) { // verifica se o array está vazio
        throw new Error("O array não pode estar vazio");
    }
    let itemRandomico = Math.floor(Math.random() * items.length);
    return items[itemRandomico]!; // ! para ignorar a possibilidade de undefined
}

let numeros = [1, 2, 3, 4, 5];
let numerosRandomicos = retornarElementosRandomicos<number>(numeros);
console.log(numerosRandomicos);

let frutas = ["maçã", "banana", "laranja"];
let frutasRandomicas = retornarElementosRandomicos<string>(frutas);
console.log(frutasRandomicas);

// Exemplo 2
function exibirElementos<T>(array: T[]): void {
    array.forEach(elemento => {
        console.log(elemento);
    });
}

let numeros2 = [1, 2, 3, 4, 5];
exibirElementos<number>(numeros2);

let estados = ["RS", "SC", "PR"];
exibirElementos<string>(estados);
