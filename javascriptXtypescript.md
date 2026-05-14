# Diferenças entre JavaScript e TypeScript

## 1. Type Annotation

- **TypeScript:** Permite declarar tipos explícitos para variáveis, funções e objetos.

  ```typescript
  let idade: number = 25;
  let nome: string = 'Luisa';
  ```

- **JavaScript:** Não possui anotação de tipo, tudo é dinâmico.

  ```javascript
  let idade = 25;
  let nome = 'Luisa';
  ```

## 2. Tipos Primitivos, Objetos e Tuplas

- **TypeScript:** Permite definir tipos para objetos e tuplas.

  ```typescript
  let carro: { marca: string, ano: number, placa: string, valor: number };
  carro = { marca: 'Toyota', ano: 2020, placa: 'ABC-1234', valor: 50000 };

  let pessoa: [string, number, string]; // tupla
  pessoa = ['Luisa', 25, 'Cientista de dados'];
  ```

- **JavaScript:** Objetos e arrays são criados sem restrição de tipos, não existe tupla nativa.

  ```javascript
  let carro = { marca: 'Toyota', ano: 2020, placa: 'ABC-1234', valor: 50000 };
  let pessoa = ['Luisa', 25, 'Cientista de dados'];
  ```

## 3. Funções com Tipos

- **TypeScript:** Define tipos dos parâmetros e do retorno.

  ```typescript
  function multiplicarNumeros(num1: number, num2: number): number {
    return num1 * num2;
  }
  ```

- **JavaScript:** Não há verificação de tipos.

  ```javascript
  function multiplicarNumeros(num1, num2) {
    return num1 * num2;
  }
  ```

## 4. Arrays Tipados e Spread Operator

- **TypeScript:** Arrays podem ser tipados e o spread operator é usado para copiar arrays.

  ```typescript
  let idiomas: string[] = ['Português', 'Inglês'];
  idiomas.push('Alemão');
  let copia_idiomas = [...idiomas, 'Italiano', 'Chinês'];
  ```

- **JavaScript:** Arrays podem conter qualquer tipo de valor e o spread operator também é suportado.

  ```javascript
  let idiomas = ['Português', 'Inglês'];
  idiomas.push('Alemão');
  let copia_idiomas = [...idiomas, 'Italiano', 'Chinês'];
  ```

## 5. BigInt

- **TypeScript:** Uso depende do target ES2020 ou superior no tsconfig.json.

  ```typescript
  let numero_grande: bigint = 9007199254741991n;
  ```

- **JavaScript:** Também existe, mas sem verificação de tipo.

  ```javascript
  let numero_grande = 9007199254741991n;
  ```

## 6. Compilação e Arquivos

- **TypeScript:** Precisa ser compilado para JavaScript antes de rodar. Exemplo: `app.ts` vira `app.js`.
- **JavaScript:** Pode ser executado diretamente.

## 7. Configuração do Projeto

- **TypeScript:** Usa `tsconfig.json` para definir opções de compilação, como target ES2020, checagem estrita de tipos, geração de arquivos de declaração, etc.
- **JavaScript:** Não possui configuração de tipos, apenas pode usar ferramentas como Babel para transpilar código.

## 8. Vantagem do TypeScript

- Segurança de tipos, ajuda a evitar erros comuns em tempo de desenvolvimento.
- Permite detectar erros antes de executar o código.

---

**Resumo:**
TypeScript adiciona tipos estáticos, checagem de tipos, interfaces, tuplas e outras funcionalidades que não existem no JavaScript puro. No seu projeto, isso aparece nas anotações de tipo, funções tipadas, objetos, arrays tipados, tuplas e uso do arquivo `tsconfig.json` para configuração do compilador.
