const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
const reviewController = require('../controllers/reviewController')

// api/movies
router.get('/', movieController.index)

// api/movies/:id
router.get('/:id', movieController.show)

// api/movies/:id/reviews
router.post("/:id/reviews", reviewController.store);

module.exports = router