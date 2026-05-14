// Tipos primitivos em TypeScript
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// número
var idade = 25;
var hexadecimal = 0x1aa; // 426 em hexadecimal
var binario = 10; // 10 em binário
var octal = 484; // 484 em octal
var float = 3.14; // ponto flutuante
//console.log(idade, hexadecimal, binario, octal, float);
//console.log(typeof float);
//console.log(typeof hexadecimal);
// string
var nome = 'Luisa'; // aspas simples
//console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
var nome_completo = "".concat(nome, " Hamon de Freitas Jardim"); // backticks
//console.log(nome_completo);
//console.log(`Meu nome completo é ${nome_completo}. Tenho ${idade} anos.`);
//array
var animais = ['Cachorro', 'Gato', 'Coelho'];
//console.log(animais[1]);
var frutas = ['abacaxi', 'banana', 'laranja']; // outra sintaxe para array
//console.log(frutas[1]);
var numeros = [1, 2, 3, 4, 5];
//console.log(numeros[2]);
var idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
//console.log(idiomas);
idiomas.push('Alemão'); // adiciona um novo idioma ao array
//console.log(idiomas);
var tamanho_idiomas = idiomas.length; // obtém o tamanho do array
//console.log(`Número de idiomas: ${tamanho_idiomas}`);
// spread operator para copiar arrays
var copia_idiomas = __spreadArray(__spreadArray([], idiomas, true), ['Italiano', 'Chinês'], false);
//console.log(copia_idiomas);
var linguagens = ['JavaScript', 'TypeScript', 'Ruby', 'Python'];
function funcaolinguagens(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
// funcaolinguagens(linguagens);
//Objeto
var carro;
carro = {
    marca: 'Toyota',
    ano: 2020,
    placa: 'ABC-1234',
    valor: 50000
};
//console.log(carro);
// função com type annotation
function adicionarNumeros(num1, num2) {
    return num1 + num2;
}
function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}
//console.log(multiplicarNumeros(2, 3));
// boolean
var estaChovendo = true;
//console.log(estaChovendo);
//if (estaChovendo) {
//    console.log('Está chovendo, leve um guarda-chuva!');
//} else {
//    console.log('Não está chovendo, aproveite o dia!');
//}
// bigint
// permite representar números inteiros muito grandes
var numero_grande = 9007199254741991n; // só disponivel a partir do es2020 target no tsconfig.json
//console.log(numero_grande);
// Tupla
// permite o armazenamento de múltiplos valores de tipos diferentes em um array
var pessoa; // define a tupla
pessoa = ['Luisa', 25, 'Cientista de dados']; // atribui valores à tupla
console.log(pessoa);
console.log("Nome: ".concat(pessoa[0], ", Idade: ").concat(pessoa[1], ", Profiss\u00E3o: ").concat(pessoa[2])); // acessa os valores da tupla
// Exemplo 2: acesso valores da tupla e atribuição a variáveis
var nome = pessoa[0];
var idade = pessoa[1];
var profissao = pessoa[2];
console.log("Nome: ".concat(nome, ", Idade: ").concat(idade, ", Profiss\u00E3o: ").concat(profissao));
