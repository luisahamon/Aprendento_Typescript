// Tuplas em TypeScript
// permite o armazenamento de múltiplos valores de tipos diferentes em um array

let pessoa : [string, number, string]; // define a tupla
pessoa = ['Luisa', 25, 'Cientista de dados']; // atribui valores à tupla
//console.log(pessoa);
//console.log(`Nome: ${pessoa[0]}, Idade: ${pessoa[1]}, Profissão: ${pessoa[2]}`); // acessa os valores da tupla

// Exemplo 2: acesso valores da tupla e atribuição a variáveis
let nome: string = pessoa[0];
let idade: number = pessoa[1];
let profissao: string = pessoa[2];
//console.log(`Nome: ${nome}, Idade: ${idade}, Profissão: ${profissao}`);

// Exemplo 3: tupla com valores padrão
let listaFrutas: [string, ...string[]] = ['maçã', 'banana', 'laranja'];
//console.log(listaFrutas);

// Exemplo 4: lista heterogênea - com diferentes tipos de dados
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas]; // spread operator para copiar a listaFrutas
//console.log(listaFrutas2);

// Exemplo 5: Lista de função com tuplas
function listarPessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Luisa','João'], [25, 30]);
//console.log(resultado)

// Exemplo 6 - Labeled Tuples com Spread Operator em uma Função
type Nome =
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeDoMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}
//console.log(criarPessoa('Luisa', 'Jardim'));
// ou
//console.log(criarPessoa('Luisa', 'Hamon', 'Jardim'));
