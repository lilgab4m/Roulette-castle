const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())


// Criando uma instância do banco de dados SQLite
const db = new sqlite3.Database('roulette');

// // Excluindo Tabela
// const dropTableQuery = 'DROP TABLE IF EXISTS cadastro';

// db.serialize(() => {
//   db.run(dropTableQuery, (err) => {
//     if (err) {
//       console.error('Erro ao excluir tabela', err);
//       throw err;
//     }

//     console.log('Tabela Excluida com sucesso')
//   })
// })

// Criando uma tabela de exemplo (opcional)
const createTableQuery = `
CREATE TABLE  if not exists cadastro (
	id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
	pais VARCHAR (10) NOT NULL,
	nome VARCHAR (60) NOT NULL,
	datanasc VARCHAR (8) NOT NULL,
	cpf VARCHAR (8) NOT NULL,
	email VARCHAR (60) NOT NULL,
	telefone VARCHAR (11) NOT NULL,
	usuario VARCHAR (15) NOT NULL,
	senha VARCHAR (10) NOT NULL,
  dinheiro VARCHAR (60)
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
app.post('/adicionar-usuario', (req, res) => {
  const { pais, nome, dataNasc, cpf, email, telefone, usuario, senha } = req.body;
  const insertQuery = "INSERT INTO cadastro (pais, nome, datanasc, cpf, email, telefone, usuario, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.run(insertQuery, [pais, nome, dataNasc, cpf, email, telefone, usuario, senha], (err, result) => {
    if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        res.status(500).json({ message: "Erro ao cadastrar usuário." });
    } else {
        console.log('Usuário cadastrado com sucesso!');
        res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
    }
});
    const usuarioVeri = "SELECT usuario FROM cadastro where usuario = ?"
    db.run(usuarioVeri, [usuario], (err, userresult) => {
    if (err) {
      console.error('Erro ao verificar usuário:', err);
    } if (userresult.length > 0) {
      res.status(200).json({ message: "Esse usuario já esta em uso" });
    }
  })
});

// Rota para checar login
app.post('/login', (req, res) => {
  const {usuario, senha } = req.body;
  if (!usuario || !senha) {
      return res.status(400).json({ message: "Usuario e senha são obrigatórios." });
  }

  const sql = "SELECT * FROM cadastro WHERE usuario = ? AND senha = ?";
  db.all(sql, [usuario, senha], (err, result) => {
      if (err) {
          console.log(err);
          return res.status(500).json({ message: "Ocorreu um erro ao autenticar o usuário." });
      }
      if (result.length > 0) {
          return res.status(200).json({ message: "Login realizado com sucesso!" });
      } else {
          return res.status(401).json({ message: "Usuario ou senha incorretos." });
      }
  });
});

// Iniciando o servidor
app.listen(3001 , () => console.log('Escutando no port 3001'))
