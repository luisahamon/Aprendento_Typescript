# Tipos de dados em TypeScript

## Type Annotation

Em TypeScript, você pode declarar o tipo da variável usando a sintaxe:

``` typescript
let nomeVariavel: Tipo = valor;
```

Exemplo real do projeto:

``` typescript
let idade: number = 25;
let nome: string = 'Luisa';
```

### Por que usar Type Annotation?

Sem type annotation, TypeScript se comporta como JavaScript, perdendo a principal vantagem: segurança de tipos.

## Tipos Primitivos

- **boolean**: `let estaChovendo: boolean = true;`
- **number**: `let idade: number = 25;`
- **string**: `let nome: string = 'Luisa';`
- **bigint**: `let numero_grande: bigint = 9007199254741991n;`

## Arrays

- Sintaxe: `let animais: string[] = ['Cachorro', 'Gato'];`
- Alternativa: `let frutas: Array<string> = ['abacaxi', 'banana'];`
- Spread operator: `let copia_idiomas = [...idiomas, 'Italiano', 'Chinês'];`

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

- `boolean` = tipo primitivo
- `Boolean` = tipo objeto (evite usar)

---

**Resumo:**
TypeScript permite definir tipos para variáveis, funções, arrays, objetos e tuplas, trazendo mais segurança e clareza ao código em comparação ao JavaScript.
