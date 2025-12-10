const connection = require('../database/connection'); // importa la connessione


// index
const index = (req, res) => {
    res.send('show all movies here')
}

// show
const show = (req, res) => {
    res.send('show film with id: ' + req.params.id)
}

module.exports = {
    index,
    show
}