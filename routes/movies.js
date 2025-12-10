const express = require('express')
const router = express.Router()

// api/movies
router.get('/', (req, res) => {
    res.send('show all movies here')
})

// api/movies/:id
router.get('/:id', (req, res) => {
    res.send('show film with id: ' + req.params.id)
})


module.exports = router