const connection = require('../database/connection'); // importa la connessione


// index
const index = (req, res) => {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        console.log(result);

        return res.json(result);
    })
}

// show
const show = (req, res) => {
    res.send('show film with id: ' + req.params.id)
}

module.exports = {
    index,
    show
}