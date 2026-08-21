# Tipos de Dados em TypeScript

## Type Annotation

Em TypeScript, você pode declarar o tipo da variável usando a sintaxe:

```typescript
let nomeVariavel: Tipo = valor;
```

Exemplo real do projeto:

```typescript
let idade: number = 25;
let nome: string = 'Luisa';
```

### Por que usar Type Annotation?

Sem type annotation, o TypeScript se comporta como JavaScript, perdendo a principal vantagem: a segurança de tipos.

## Tipos Primitivos

- **boolean**: `let estaChovendo: boolean = true;`
- **number**: `let idade: number = 25;`
- **string**: `let nome: string = 'Luisa';`
- **bigint**: `let numeroGrande: bigint = 9007199254741991n;`

## Arrays

- Sintaxe: `let animais: string[] = ['Cachorro', 'Gato'];`
- Alternativa: `let frutas: Array<string> = ['abacaxi', 'banana'];`
- Spread operator: `let copiaIdiomas = [...idiomas, 'Italiano', 'Chinês'];`

## Objetos

```typescript
let carro: { marca: string, ano: number, placa: string, valor: number };
carro = { marca: 'Toyota', ano: 2020, placa: 'ABC-1234', valor: 50000 };
```

## Funções com Tipos

```typescript
function adicionarNumeros(num1: number, num2: number): number {
    return num1 + num2;
}
```

## Tupla

Permite armazenar múltiplos valores de tipos diferentes em um array:

```typescript
let pessoa: [string, number, string];
pessoa = ['Luisa', 25, 'Cientista de dados'];
```

## boolean vs Boolean

- `boolean` = tipo primitivo.
- `Boolean` = tipo objeto (evite usar).

## Outros Tipos Importantes

- **any**: desativa a verificação de tipos. Evite usar em excesso.
- **unknown**: tipo seguro para valores desconhecidos; exige verificação antes do uso.
- **void**: indica que uma função não retorna valor.
- **never**: usado em funções que nunca retornam (ex.: lançam erro ou loop infinito).
- **null** e **undefined**: representam ausência de valor.
- **enum**: conjunto de valores nomeados.
- **object**: representa todos os valores que não são primitivos.

## Tipos Avançados

- **Type assertions** (`Assertions.ts`): informam ao compilador o tipo esperado de um valor, com `as` ou `<>`.
- **Type casting** (`casting.ts`): conversão explícita entre tipos.
- **Type guards** (`guards.ts`): restringem o tipo em tempo de execução com `typeof`, `instanceof` e `in`.
- **Mapped types** (`MappedTipes.ts`): criam novos tipos a partir de tipos existentes, transformando cada propriedade.
- **Conditional types** (`conditional_types.ts`): definem tipos com base em condições (`T extends U ? X : Y`).
- **Intersection types** (`intersection_types.ts`): combinam tipos com o operador `&`.
- **satisfies** (`satisfies_operator.ts`): verifica conformidade com um tipo sem perder a inferência original (TypeScript 4.9+).

## Índice de Arquivos

| Arquivo | Conteúdo |
| --------- | ---------- |
| `primitivos.ts` | `number`, `string`, `boolean`, `bigint` |
| `arrays.ts` | arrays tipados e spread operator |
| `objetos.ts` | objetos com tipos literais |
| `funcoes.ts` | funções com type annotation |
| `tuplas.ts` | tuplas |
| `enums.ts` | enums numéricos, string e `const` |
| `any.ts` | tipo `any` |
| `unkdown.ts` | tipo `unknown` |
| `void.ts` | tipo `void` |
| `never.ts` | tipo `never` |
| `null&undefined.ts` | `null` e `undefined` |
| `object.ts` | tipo `object` |
| `Assertions.ts` | type assertions |
| `casting.ts` | type casting |
| `guards.ts` | type guards |
| `MappedTipes.ts` | mapped types |
| `conditional_types.ts` | conditional types |
| `intersection_types.ts` | intersection types |
| `satisfies_operator.ts` | operador `satisfies` |

---

**Resumo:**

TypeScript permite definir tipos para variáveis, funções, arrays, objetos e tuplas, trazendo mais segurança e clareza ao código em comparação ao JavaScript.
