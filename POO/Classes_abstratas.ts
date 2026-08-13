// Classes abstratas em TypeScript: base para outras classes, sem instanciação direta.

// Uma classe abstrata não pode ser instanciada diretamente; serve como base para outras classes.
// São frequentemente usadas para definir um contrato comum às classes derivadas.

// Exemplo 1
abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string) {
    }

    abstract calcularSalario(): number;

    get nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    emitirContracheque(): string {
        return `Contracheque de ${this.nomeCompleto}: R$ ${this.calcularSalario()}`;
    }
}

class FuncionarioCLT extends Funcionario { // classe concreta que implementa a classe abstrata
    constructor(nome: string, sobrenome: string, private salario: number) {
        super(nome, sobrenome);
    }

    calcularSalario(): number {
        return this.salario;
    }
}

const funcionarioCLT = new FuncionarioCLT("João", "Silva", 1000);
console.log(funcionarioCLT.emitirContracheque());

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
        super(nome, sobrenome);
    }

    calcularSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const funcionarioPJ = new FuncionarioPJ("Maria", "Silva", 50, 160);
console.log(funcionarioPJ.emitirContracheque());
