import express from 'express';
import { mainRouter } from './routes/main'; // ajuste o caminho conforme necessário

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Conectando as rotas
app.use('/', mainRouter); // O prefixo '/api' é opcional

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
