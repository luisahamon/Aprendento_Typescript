# Diferenças entre JavaScript e TypeScript

## 1. Type Annotation

- **TypeScript:** permite declarar tipos explícitos para variáveis, funções e objetos.

  ```typescript
  let idade: number = 25;
  let nome: string = 'Luisa';
  ```

- **JavaScript:** não possui anotação de tipo; tudo é dinâmico.

  ```javascript
  let idade = 25;
  let nome = 'Luisa';
  ```

## 2. Tipos Primitivos, Objetos e Tuplas

- **TypeScript:** permite definir tipos para objetos e tuplas.

  ```typescript
  let carro: { marca: string, ano: number, placa: string, valor: number };
  carro = { marca: 'Toyota', ano: 2020, placa: 'ABC-1234', valor: 50000 };

  let pessoa: [string, number, string]; // tupla
  pessoa = ['Luisa', 25, 'Cientista de dados'];
  ```

- **JavaScript:** objetos e arrays são criados sem restrição de tipos; não existe tupla nativa.

  ```javascript
  let carro = { marca: 'Toyota', ano: 2020, placa: 'ABC-1234', valor: 50000 };
  let pessoa = ['Luisa', 25, 'Cientista de dados'];
  ```

## 3. Funções com Tipos

- **TypeScript:** define tipos dos parâmetros e do retorno.

  ```typescript
  function multiplicarNumeros(num1: number, num2: number): number {
    return num1 * num2;
  }
  ```

- **JavaScript:** não há verificação de tipos.

  ```javascript
  function multiplicarNumeros(num1, num2) {
    return num1 * num2;
  }
  ```

## 4. Arrays Tipados e Spread Operator

- **TypeScript:** arrays podem ser tipados e o spread operator é usado para copiar arrays.

  ```typescript
  let idiomas: string[] = ['Português', 'Inglês'];
  idiomas.push('Alemão');
  let copiaIdiomas = [...idiomas, 'Italiano', 'Chinês'];
  ```

- **JavaScript:** arrays podem conter qualquer tipo de valor e o spread operator também é suportado.

  ```javascript
  let idiomas = ['Português', 'Inglês'];
  idiomas.push('Alemão');
  let copiaIdiomas = [...idiomas, 'Italiano', 'Chinês'];
  ```

## 5. BigInt

- **TypeScript:** o uso depende do `target` ES2020 ou superior no `tsconfig.json`.

  ```typescript
  let numeroGrande: bigint = 9007199254741991n;
  ```

- **JavaScript:** também existe, mas sem verificação de tipo.

  ```javascript
  let numeroGrande = 9007199254741991n;
  ```

## 6. Compilação e Arquivos

- **TypeScript:** pode ser executado com `ts-node` ou compilado para JavaScript antes de rodar. Exemplo: `app.ts` vira `app.js`.
- **JavaScript:** pode ser executado diretamente.

## 7. Configuração do Projeto

- **TypeScript:** usa `tsconfig.json` para definir opções de compilação, como `target`, checagem estrita de tipos, geração de arquivos de declaração, entre outras.
- **JavaScript:** não possui configuração de tipos, mas pode usar ferramentas como Babel para transpilar código.

## 8. Vantagens do TypeScript

- Segurança de tipos, ajuda a evitar erros comuns em tempo de desenvolvimento.
- Permite detectar erros antes de executar o código.
- Adiciona recursos como interfaces, tipos genéricos, enums e tuplas.

---

**Resumo:**

TypeScript adiciona tipos estáticos, checagem de tipos, interfaces, tuplas e outras funcionalidades que não existem no JavaScript puro. No projeto, isso aparece nas anotações de tipo, funções tipadas, objetos, arrays tipados, tuplas e no uso do arquivo `tsconfig.json` para configuração do compilador.
