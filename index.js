const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'tu_usuario', 
  host: 'localhost',
  database: 'likeme',
  password: 'tu_contraseña', 
  port: 5432,
});

app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (error) {
        res.json({ error: error.message });
  }
});


app.post('/posts', async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;

  try {
        const query = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)';
    const values = [titulo, img, descripcion, likes];
    const result = await pool.query(query, values);

        res.json(result.rows);
  } catch (error) {
        res.json({ error: error.message });
  }
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
