// Membros estáticos em TypeScript: compartilhados entre todas as instâncias da classe.

// Propriedades estáticas são compartilhadas entre todas as instâncias da classe
// e são declaradas com a palavra-chave static.

class Funcionario {
    static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome: string,
        private cargo: string
    ) {
        // para acessar a propriedade estática, usamos o nome da classe
        Funcionario.contratacoes++;
    }
}

const funcionario1 = new Funcionario("João", "Silva", "Desenvolvedor");
const funcionario2 = new Funcionario("Maria", "Santos", "Analista");

console.log(Funcionario.contratacoes); // 2

// Métodos estáticos
// São métodos que pertencem à classe, não à instância.
// Podem ser chamados diretamente pela classe.
// Não têm acesso aos atributos da instância.
// São úteis para operações que não dependem de dados específicos da instância.

// Exemplo
class Funcionario_01 {
    private static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome: string,
        private cargo: string,
    ) {
        Funcionario_01.contratacoes++;
    }

    public static getContratacoes(): number {
        return Funcionario_01.contratacoes;
    }
}
