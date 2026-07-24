# Aprendendo TypeScript

Este projeto contém exemplos práticos para aprender TypeScript do básico ao intermediário, comparando-o com JavaScript.

## Estrutura do Projeto

- `hello_world/`: Exemplo básico "Olá, mundo!" em TypeScript.
- `tipos_dados/`: Exemplos de type annotation, tipos primitivos, arrays, objetos, tuplas, enums, `any`, `unknown`, `never`, `void`, `null`/`undefined` e funções.
- `Funcoes/`: Exemplos de funções, parâmetros opcionais, padrão e rest parameters, arrow functions e constructors.
- `fluxos_controle/`: Exemplos de `if/else`, `switch/case`, loops `for` e `while`.
- `POO/`: Exemplos de classes, construtores, modificadores de acesso (`public`, `private`, `protected`) e `readonly`.
- `javascriptXtypescript.md`: Documento comparando as principais diferenças entre JavaScript e TypeScript.

## Configuração do Projeto

- `package.json`: Dependências e scripts (`dev`, `build`, `test`).
- `tsconfig.json`: Configuração do compilador TypeScript com `target: ES2022`, `strict: true` e geração de source maps.
- `.eslintrc.js`: Configuração do ESLint com Prettier para TypeScript.

## Como executar os exemplos

1. Instale as dependências:

   ```powershell
   npm install
   ```

2. Execute um arquivo TypeScript com `ts-node`:

   ```powershell
   npx ts-node tipos_dados/primitivos.ts
   npx ts-node Funcoes/funcoes.ts
   ```

3. Para compilar o projeto TypeScript para JavaScript:

   ```powershell
   npx tsc
   ```

   Ou usando o script definido no `package.json`:

   ```powershell
   npm run build
   ```

## Principais conceitos abordados

- Type Annotation
- Tipos primitivos (`number`, `string`, `boolean`, `bigint`)
- Arrays tipados
- Objetos tipados
- Tuplas
- Enums
- Tipos especiais: `any`, `unknown`, `never`, `void`, `null` e `undefined`
- Funções (parâmetros, retorno, opcionais, padrão, rest parameters, arrow functions)
- Controle de fluxo (`if/else`, `switch/case`, `for`, `while`)
- Programação Orientada a Objetos (classes, construtores, modificadores de acesso, `readonly`)
- Diferenças entre TypeScript e JavaScript

## Arquivos úteis

- [`tipos_dados/tipos.md`](tipos_dados/tipos.md): Resumo dos tipos em TypeScript.
- [`javascriptXtypescript.md`](javascriptXtypescript.md): Comparação prática entre TypeScript e JavaScript.

---

Projeto criado para estudo e prática de TypeScript.

## Recursos Extras

- [Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)
- Curso Typescript - Microsoft Learn
- Livro Programming TypeScript - Boris Cherny
