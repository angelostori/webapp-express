const connection = require("../database/connection");

// store
const store = (req, res) => {
    const movieId = req.params.id;
    const { name, vote, text } = req.body;

    // Validazione base
    if (!name || vote === undefined || !text) {
        return res.status(400).json({
            error: true,
            message: "All fields are required"
        });
    }

    const sql = `
        INSERT INTO reviews (movie_id, name, vote, text)
        VALUES (?, ?, ?, ?)
    `;

    connection.query(sql, [movieId, name, vote, text], (err, result) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        res.status(201).json({
            success: true,
            message: "Review added successfully",
            reviewId: result.insertId
        });
    });
};

module.exports = { store };
