# Aprendendo TypeScript

Projeto de estudo com exemplos práticos de TypeScript, abordando desde o básico até tópicos intermediários, como tipos avançados, orientação a objetos, interfaces, módulos e generics.

## Estrutura do Repositório

- `hello_world/` — primeiro exemplo com `console.log` e anotação de tipo.
- `tipos_dados/` — tipos do TypeScript: primitivos, arrays, objetos, tuplas, enums, `any`, `unknown`, `void`, `never`, `null`/`undefined`, funções, `object`, `satisfies`, mapped types, conditional types, intersection types, type assertions, casting e type guards.
- `Funcoes/` — funções, parâmetros opcionais, padrão, rest parameters, arrow functions, constructors e function constructor.
- `fluxos_controle/` — `if/else`, `switch/case`, `for` (`for...of`, `for...in`), `while` e `do...while`.
- `POO/` — classes, construtores, modificadores de acesso (`public`, `private`, `protected`), `readonly`, herança, classes abstratas, getters, setters e membros estáticos.
- `Interfaces.ts` — contratos com interfaces, propriedades opcionais, `readonly`, extensão, `Omit` e comparação com `type` alias.
- `Modulos/` — organização de código com `export`/`import`.
- `generics/` — funções, classes, interfaces e constraints genéricas.
- `projeto_final/` — API com Node.js, Express, Helmet e dotenv (projeto separado com `package.json` e `tsconfig.json` próprios).
- `javascriptXtypescript.md` — comparação prática entre JavaScript e TypeScript.
- `tipos_dados/tipos.md` — resumo dos tipos em TypeScript.
- `projeto_final/LIBS.md` — explicação das bibliotecas usadas no projeto final.

## Configuração do Projeto

- `package.json`: dependências e scripts (`dev`, `build`, `test`).
- `tsconfig.json`: compilador TypeScript com `target` ES2022, `module` CommonJS, `strict: true`, geração de source maps e arquivos de declaração.
- `.eslintrc.js`: lint com regras para TypeScript e Prettier.
- `cspell.json`: verificação ortográfica (inglês e português brasileiro).

## Como Executar

1. Instale as dependências:

   ```powershell
   npm install
   ```

2. Execute um arquivo TypeScript com `ts-node` (script `dev`):

   ```powershell
   npx ts-node tipos_dados/primitivos.ts
   npx ts-node Funcoes/funcoes.ts
   ```

3. Compile o projeto TypeScript para JavaScript:

   ```powershell
   npx tsc
   ```

   Ou use o script definido no `package.json`:

   ```powershell
   npm run build
   ```

## Projeto Final

A pasta `projeto_final/` contém um servidor HTTP com Express, escrito em TypeScript com configuração estrita (`strict`, `verbatimModuleSyntax`, `noUncheckedIndexedAccess`, entre outras). Usa Helmet para cabeçalhos de segurança e dotenv para variáveis de ambiente.

Para executar:

```powershell
cd projeto_final
npm install
npm run serve   # compila em modo watch (tsc --watch) + nodemon
```

Outros scripts disponíveis:

- `npm run build` — limpa `dist/` (rimraf) e compila com `tsc`.
- `npm start` — executa `dist/index.js` em modo produção (cross-env).

O servidor sobe em `http://localhost:3000`. Veja [`projeto_final/LIBS.md`](projeto_final/LIBS.md) para a explicação de cada biblioteca utilizada.

## Principais Conceitos Abordados

- Type Annotation
- Tipos primitivos (`number`, `string`, `boolean`, `bigint`)
- Arrays tipados e spread operator
- Objetos e tipos literais
- Tuplas
- Enums (numéricos, string e `const`)
- Tipos especiais: `any`, `unknown`, `never`, `void`, `null` e `undefined`
- Funções (parâmetros, retorno, opcionais, padrão, rest parameters, arrow functions, constructors)
- Controle de fluxo (`if/else`, `switch/case`, `for`, `while`)
- Programação Orientada a Objetos (classes, construtores, modificadores de acesso, `readonly`)
- Herança, classes abstratas, getters, setters e membros estáticos
- Interfaces (opcionais, `readonly`, extensão)
- Módulos (`export`/`import`)
- Generics (funções, classes, interfaces e constraints)
- Type guards, mapped types, conditional types, intersection types e `satisfies`
- Diferenças entre TypeScript e JavaScript
- Servidor Node.js com Express, Helmet e dotenv (projeto final)

## Arquivos Úteis

- [`tipos_dados/tipos.md`](tipos_dados/tipos.md): resumo dos tipos em TypeScript.
- [`javascriptXtypescript.md`](javascriptXtypescript.md): comparação prática entre TypeScript e JavaScript.
- [`projeto_final/LIBS.md`](projeto_final/LIBS.md): bibliotecas usadas no projeto final (Express, body-parser, dotenv, helmet, etc.).

---

Projeto criado para estudo e prática de TypeScript.

## Recursos Extras

- [Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)
- [Microsoft Learn: Curso de TypeScript](https://learn.microsoft.com/pt-br/training/paths/build-javascript-applications-typescript/)
- *Programming TypeScript* — Boris Cherny
