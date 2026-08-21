// Configuração do express
import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express(); // Instância do express
const port = 3000; // Porta do servidor

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
