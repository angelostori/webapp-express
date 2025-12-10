const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

// api/movies
router.get('/', movieController.index)

// api/movies/:id
router.get('/:id', movieController.show)


module.exports = router