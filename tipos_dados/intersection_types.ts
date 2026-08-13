// Intersection Types em TypeScript: combinação de tipos com o operador &.

// Combinação de tipos usando o operador &.
// O novo tipo possui todas as características dos tipos combinados.

// Exemplo
interface Endereco {
    rua: string;
    bairro: string;
    cidade: string;
}

interface Pessoa {
    nome: string;
    idade: number;
    profissao: string;
}

 type EnderecoPessoa = Endereco & Pessoa; // intersection type

const pessoa: EnderecoPessoa = {
    rua: "Rua das Flores",
    bairro: "Centro",
    cidade: "São Paulo",
    nome: "João",
    idade: 30,
    profissao: "Programador"
};
