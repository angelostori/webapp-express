const connection = require('../database/connection'); // importa la connessione


// index
const index = (req, res) => {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        //console.log(result);
        return res.json(result);
    })
}

// show
const show = (req, res) => {
    const id = Number(req.params.id)
    const sql = 'SELECT * FROM movies WHERE id = ?'
    const sqlReviews = 'SELECT id, name, vote, text, created_at, updated_at FROM reviews WHERE movie_id = ?'

    connection.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        console.log(result);
        if (result.length === 0) return res.status(404).json({ error: true, message: 'Movie not found!' })

        const movie = result[0]

        connection.query(sqlReviews, [id], (errReview, resultReview) => {
            if (errReview) return res.status(500).json({ error: true, message: err.message })
            console.log(resultReview);
            movie.reviews = resultReview
            res.json(movie)
        })
    })
}

module.exports = {
    index,
    show
}