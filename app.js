import express from 'express';
//import path from 'path';
//import { fileURLToPath } from 'url';

const app = express();

// Corrige __dirname em ES Modules
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

// Middleware para ler JSON
app.use(express.json());

// Middleware para servir arquivos da pasta "public"
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(200).json("Página de início");
});


// Exporta o app para usar no server.js
export default app;
