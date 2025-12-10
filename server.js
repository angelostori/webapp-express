const express = require('express');
const app = express();
const db = require('./database/connection'); // importa la connessione
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Server attivo!');
});

app.listen(3000, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
