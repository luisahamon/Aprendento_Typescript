// Type assertions em TypeScript: informa ao compilador o tipo esperado de um valor.

// Informa ao compilador o tipo de uma variável.
// Semelhante ao type casting, mas não altera o tipo em tempo de execução.
// Palavras-chave: as, <> (angle brackets).

// Exemplo 1
 type Humano = {
    nome: string;
    idade: number;
    idioma: string;
};

const humano = {
    nome: 'Maria',
    idade: 33,
    idioma: 'Português',
};

const humano2: Humano = humano;
console.log(humano2);

// Exemplo 2
function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco - preco * (desconto / 100);
    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

const descontoFinal = exibirPrecoFinal(100, 10, true) as string;
console.log(descontoFinal);
