// Mapped Types em TypeScript: criação de novos tipos a partir de tipos existentes.

// Permite obter um tipo existente e modificar cada propriedade em um novo tipo.
// Sintaxe: type NovoTipo = { [Propriedade in TipoBase]: TipoBase[Propriedade] };

// Exemplo
interface Pessoa {
    nome: string;
    idade: number;
    email: string;
}

 type PessoaOpcional = {
    [K in keyof Pessoa]?: Pessoa[K]; // torna todas as propriedades opcionais
};

const pessoa1: Pessoa = {
    nome: "João",
    idade: 30,
    email: "joao@email.com"
};

const pessoa2: PessoaOpcional = {
    nome: "Maria",
    idade: 25
    // email é opcional
};

// Exemplo 2
 type Usuario = {
    nome: string;
    senha: string;
    email: string;
};

 type UsuarioOpcional = {
    [K in keyof Usuario]?: Usuario[K]; // torna todas as propriedades opcionais
};

 type UsuarioSomenteLeitura = {
    readonly [K in keyof Usuario]: Usuario[K]; // torna todas as propriedades somente leitura
};
