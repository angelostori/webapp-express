require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000
const moviesRouter = require('./routes/movies')

// register body parser
app.use(express.json())

// register static assets
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server attivo!');
});

app.use('/api/movies', moviesRouter)

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
