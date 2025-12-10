require('dotenv').config();
const express = require('express');
const app = express();
const connection = require('./database/connection'); // importa la connessione
const PORT = 3000

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server attivo!');
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
