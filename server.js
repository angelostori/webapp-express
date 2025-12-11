require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000
const moviesRouter = require('./routes/movies')
const serverError = require('./middlewares/serverError')
const notFound = require('./middlewares/notFound')

// register body parser
app.use(express.json())

// register static assets
app.use(express.static('public'))

// middleware per il CORS
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
    res.send('Server attivo!');
});

app.use('/api/movies', moviesRouter)

app.use(serverError)

app.use(notFound)

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
