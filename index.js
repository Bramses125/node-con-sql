const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

<<<<<<< HEAD
// Middleware
=======
>>>>>>> 1f0024e (put y delete)
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
<<<<<<< HEAD
  user: 'tu_usuario', 
  host: 'localhost',
  database: 'likeme',
  password: 'tu_contraseña', 
  port: 5432,
=======
    user: 'tu_usuario', 
    host: 'localhost',
    database: 'likeme',
    password: 'tu_contraseña', 
    port: 5432,
>>>>>>> 1f0024e (put y delete)
});

app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (error) {
<<<<<<< HEAD
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
=======
    res.json({ error: error.message });
  }
});

app.post('/posts', async (req, res) => {
  const { titulo, img, descripcion } = req.body;

  try {
    const query = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0)';
    const values = [titulo, img, descripcion];
    const result = await pool.query(query, values);

    res.json(result.rows);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.put('/posts/like/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const query = 'UPDATE posts SET likes = likes + 1 WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);

    res.json(result.rows);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const query = 'DELETE FROM posts WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);

    res.json(result.rows);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
>>>>>>> 1f0024e (put y delete)
});
