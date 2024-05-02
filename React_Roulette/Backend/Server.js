const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Criando uma instância do banco de dados SQLite
const db = new sqlite3.Database(':memory:'); // Usando um banco de dados em memória para este exemplo

// Criando uma tabela de exemplo (opcional)
const createTableQuery = `
CREATE TABLE cadastro (
	id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
	pais VARCHAR (10) NOT NULL,
	nome VARCHAR (60) NOT NULL,
	datanasc VARCHAR (8) NOT NULL,
	cpf VARCHAR (8) NOT NULL,
	email VARCHAR (60) NOT NULL,
	telefone VARCHAR (11) NOT NULL,
	usuario VARCHAR (15) NOT NULL,
	senha VARCHAR (10) NOT NULL

)
`;

db.serialize(() => {
  db.run(createTableQuery, (err) => {
    if (err) {
      console.error('Erro ao criar tabela:', err);
      throw err;
    }
    console.log('Tabela criada com sucesso');
  });
});

// Rota para adicionar usuário ao banco de dados
app.get('/adicionar-usuario', (req, res) => {
  const { name, email } = req.query;
  const insertQuery = `INSERT INTO users (usuario, senha) VALUES (?, ?)`;
  db.run(insertQuery, [usuario, senha], function(err) {
    if (err) {
      console.error('Erro ao adicionar usuário:', err);
      res.status(500).send('Erro ao adicionar usuário');
      return;
    }
    console.log(`Usuário adicionado com ID: ${this.lastID}`);
    res.send(`Usuário adicionado com ID: ${this.lastID}`);
  });
});

// Rota para obter todos os usuários do banco de dados
app.get('/usuarios', (req, res) => {
  const selectQuery = `SELECT * FROM users`;
  db.all(selectQuery, (err, rows) => {
    if (err) {
      console.error('Erro ao obter usuários:', err);
      res.status(500).send('Erro ao obter usuários');
      return;
    }
    res.json(rows);
  });
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
