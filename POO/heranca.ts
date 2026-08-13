// Herança em TypeScript: criação de novas classes a partir de classes existentes.

// A herança permite criar novas classes a partir de uma classe existente.
// As classes filhas herdam as propriedades da classe pai, exceto as privadas.
// Sintaxe: class NomeClasseFilha extends NomeClassePai {}

// Exemplo
class Animal {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerBarulho() {
        console.log("O animal faz um barulho");
    }
}

class Cachorro extends Animal {
    raca: string;

    constructor(nome: string, idade: number, raca: string) {
        super(nome, idade);
        this.raca = raca;
    }

    latir() {
        console.log("Au au!");
    }
}

// Exemplo de uso
const meuCachorro = new Cachorro("Rex", 3, "Labrador");
meuCachorro.fazerBarulho(); // O animal faz um barulho
meuCachorro.latir(); // Au au!

// Exemplo 2 — herança com parâmetros privados
class Pessoa {
    constructor(private nome: string, private sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    getNome(): string {
        return this.nome;
    }

    getSobrenome(): string {
        return this.sobrenome;
    }
}

class Funcionario extends Pessoa {
    constructor(nome: string, sobrenome: string, private cargo: string) {
        super(nome, sobrenome); // chama o construtor da classe pai
    }

    getCargo(): string {
        return this.cargo;
    }
}
