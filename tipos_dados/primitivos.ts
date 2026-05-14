// Tipos Primitivos em TypeScript

// número
// let idade : number = 25;
let hexadecimal : number = 0x1aa; // 426 em hexadecimal
let binario : number = 0b1010; // 10 em binário
let octal : number = 0o744; // 484 em octal
let float: number = 3.14; // ponto flutuante
//console.log(idade, hexadecimal, binario, octal, float);
//console.log(typeof float);
//console.log(typeof hexadecimal);

// string
// let nome : string = 'Luisa'; // aspas simples
//console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// let nome_completo : string = `${nome} Hamon de Freitas Jardim`; // backticks
//console.log(nome_completo);

//console.log(`Meu nome completo é ${nome_completo}. Tenho ${idade} anos.`);

// boolean
let estaChovendo : boolean = true;
//console.log(estaChovendo);

//if (estaChovendo) {
//    console.log('Está chovendo, leve um guarda-chuva!');
//} else {
//    console.log('Não está chovendo, aproveite o dia!');
//}

// bigint
// permite representar números inteiros muito grandes
let numero_grande : bigint = 9007199254741991n; // só disponivel a partir do es2020 target no tsconfig.json
//console.log(numero_grande);
