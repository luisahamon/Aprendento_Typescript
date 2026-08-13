// Type guards em TypeScript: restringir o tipo de uma variável em tempo de execução.

// Técnicas: typeof, instanceof e in.

// Exemplo typeof
// Usado para determinar o tipo primitivo de uma variável.
function detalhesFuncionario(funcionario: string | number) {
    if (typeof funcionario === 'string') {
        console.log('O funcionário é uma string');
    } else {
        console.log('O funcionário é um number');
    }
}

const func = detalhesFuncionario('João');
const func2 = detalhesFuncionario(123);

// Exemplo instanceof
// Usado para determinar se um objeto é uma instância de uma classe.
const formatoData = (valor: Date | string) => {
    if (valor instanceof Date) {
        return valor.toUTCString();
    } else {
        return new Date(valor).toUTCString();
    }
};

// Exemplo in
// Usado para determinar se uma propriedade existe em um objeto.
interface Pessoa {
    nome: string;
    idade: number;
}

const pessoa: Pessoa = {
    nome: 'João',
    idade: 30
};

if ('nome' in pessoa) {
    console.log('O objeto tem a propriedade nome');
}
