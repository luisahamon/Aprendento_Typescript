// Constraints em generics: restringe os tipos aceitos por um tipo genérico.

// Podemos restringir certos tipos de dados usando constraints.

// Exemplo
interface Pessoa {
    nome: string;
    idade: number;
}

function obterIdadeMaiorQue<T extends Pessoa>(pessoas: T[], idade: number): T[] {
    return pessoas.filter(p => p.idade > idade);
}

const pessoas: Pessoa[] = [
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 40 },
];

console.log(obterIdadeMaiorQue(pessoas, 25));
