# Bibliotecas do Projeto

Explicação das dependências instaladas neste projeto.

## express

Framework web minimalista para Node.js. É a base do servidor: permite criar rotas (`GET`, `POST`, etc.), aplicar middlewares e responder requisições HTTP.

```ts
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ mensagem: "Olá, mundo!" });
});

app.listen(3000);
```

## body-parser

Middleware que interpreta o corpo (body) das requisições HTTP e o disponibiliza em `req.body`. Suporta JSON, texto e formulários (`urlencoded`).

```ts
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

> Observação: nas versões mais recentes do Express, `express.json()` e `express.urlencoded()` já fazem o mesmo trabalho, pois o body-parser foi incorporado ao framework.

## dotenv

Carrega variáveis de ambiente a partir de um arquivo `.env` para `process.env`. Útil para guardar configurações sensíveis (portas, senhas, chaves de API) fora do código.

```text
# .env
PORT=3000
DB_PASSWORD=segredo
```

```ts
import "dotenv/config";

const port = process.env.PORT; // "3000"
```

> Importante: adicione o `.env` ao `.gitignore` para não versionar segredos.

## helmet

Middleware de segurança para Express. Configura automaticamente diversos cabeçalhos HTTP que protegem a aplicação contra ataques comuns (XSS, clickjacking, sniffing de MIME type, etc.).

```ts
import helmet from "helmet";

app.use(helmet());
```

## cross-env

Permite definir variáveis de ambiente em scripts do `package.json` de forma compatível entre sistemas operacionais (Windows, Linux, macOS). Sem ele, a sintaxe `NODE_ENV=production node app.js` falharia no Windows.

```json
{
  "scripts": {
    "start": "cross-env NODE_ENV=production node dist/index.js",
    "dev": "cross-env NODE_ENV=development node dist/index.js"
  }
}
```

## rimraf

Equivalente ao comando `rm -rf` do Unix, mas multiplataforma. Usado geralmente para apagar a pasta de build (`dist/`) antes de compilar novamente, garantindo um build limpo.

```json
{
  "scripts": {
    "clean": "rimraf dist",
    "build": "npm run clean && tsc"
  }
}
```

## nodemon

Ferramenta de desenvolvimento que reinicia o servidor automaticamente sempre que detecta alterações nos arquivos. Evita ter que parar e rodar `node` manualmente a cada mudança no código.

```json
{
  "scripts": {
    "dev": "nodemon dist/index.js"
  }
}
```

> Dica: é possível configurar quais arquivos/pastas observar com um arquivo `nodemon.json` ou flags como `--watch dist`.

## concurrently

Permite executar vários comandos ao mesmo tempo em um único script do `package.json`. Muito usado em projetos TypeScript para rodar o compilador em modo watch (`tsc -w`) e o servidor (`nodemon`) simultaneamente.

```json
{
  "scripts": {
    "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
  }
}
```

## Pacotes de tipos (@types)

Pacotes do repositório [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) que fornecem as definições de tipos TypeScript para bibliotecas escritas em JavaScript. Sem eles, o TypeScript não conhece os tipos dessas bibliotecas e a tipagem/autocomplete não funciona. Devem ser instalados como dependências de desenvolvimento:

```bash
npm install -D @types/express @types/body-parser @types/node
```

### @types/express

Tipos do Express: `Request`, `Response`, `NextFunction`, `Application`, etc. Permite tipar rotas e middlewares corretamente.

```ts
import { Request, Response, NextFunction } from "express";

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ ok: true });
});
```

### @types/body-parser

Tipos do body-parser: opções dos middlewares (`json()`, `urlencoded()`, `text()`, `raw()`) e o formato de `req.body`. Geralmente já vem como dependência do `@types/express`.

```ts
import bodyParser, { OptionsJson } from "body-parser";

const opcoes: OptionsJson = { limit: "1mb" };
app.use(bodyParser.json(opcoes));
```

### @types/node

Tipos das APIs nativas do Node.js: `process`, `fs`, `path`, `http`, `Buffer`, `__dirname`, etc. Essencial em qualquer projeto TypeScript que rode no Node.

```ts
import path from "path";

const port = process.env.PORT; // process só é reconhecido com @types/node
const arquivo = path.join(__dirname, "config.json");
```

> Observação: bibliotecas como `helmet`, `dotenv` e `rimraf` já incluem seus próprios tipos, por isso não precisam de pacote `@types` separado.

## Resumo

| Biblioteca         | Categoria            | Função principal                                  |
|--------------------|----------------------|---------------------------------------------------|
| express            | Framework web        | Criar servidor, rotas e middlewares               |
| body-parser        | Middleware           | Interpretar o corpo das requisições (`req.body`)  |
| dotenv             | Configuração         | Carregar variáveis de ambiente do arquivo `.env`  |
| helmet             | Segurança            | Adicionar cabeçalhos HTTP de proteção             |
| cross-env          | Utilitário de script | Variáveis de ambiente multiplataforma nos scripts |
| rimraf             | Utilitário de build  | Apagar pastas/arquivos (limpar `dist/`)           |
| nodemon            | Dev tool             | Reiniciar o servidor ao detectar mudanças         |
| concurrently       | Dev tool             | Rodar vários comandos em paralelo nos scripts     |
| @types/express     | Tipos (dev)          | Tipos do Express (`Request`, `Response`, etc.)    |
| @types/body-parser | Tipos (dev)          | Tipos do body-parser e de `req.body`              |
| @types/node        | Tipos (dev)          | Tipos das APIs nativas do Node.js                 |
