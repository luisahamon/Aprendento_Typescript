// Conditional Types em TypeScript: tipos baseados em condições.

// Definem tipos com base em condições.
// Usados para fluxo de tipos: ? para verdadeiro e : para falso.

// Exemplo
 type DataNascimento = string;
 type Idade = number;

 type InformacaoPessoa<T> = T extends number ? number : string; // tipo genérico condicional

const dataNascimento: InformacaoPessoa<DataNascimento> = "2025-10-20";
console.log(dataNascimento);

const idade: InformacaoPessoa<Idade> = 25;
console.log(idade);

// Exemplo 2
// Muito usado em pacotes do Node.
 type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
};

 type Empresa = {
    nome: string;
    cnpj: string;
};

 type EnderecoPessoa = {
    enderecoSecundario: string;
    cidade: string;
    pais: string;
};

 type EnderecoEmpresa = {
    localizacao: 'rua' | 'avenida' | 'praça';
};

 type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: 'Rua das Flores',
    cidade: 'São Paulo',
    pais: 'Brasil'
};

const enderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: 'rua'
};

console.log(enderecoPessoa);
console.log(enderecoEmpresa);
