// Módulos em TypeScript: compartilhamento de código com export e import.

// O TypeScript compartilha o mesmo conceito de módulos do JavaScript.
// Cada módulo possui seu próprio escopo e pode conter declarações e código.
// Use a instrução import para trazer funcionalidades de outro arquivo.

// Exemplo: arquivo math.ts — módulo hipotético
/*
export function sum(a: number, b: number) {
    return a + b;
}

export function sub(a: number, b: number) {
    return a - b;
}

export function mul(a: number, b: number) {
    return a * b;
}

export function div(a: number, b: number) {
    return a / b;
}
*/

// import { sum, sub, mul, div } from './math';

export function sum(a: number, b: number) {
    return a + b;
}

export function sub(a: number, b: number) {
    return a - b;
}

export function mul(a: number, b: number) {
    return a * b;
}

export function div(a: number, b: number) {
    return a / b;
}

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
console.log(div(1, 2));
