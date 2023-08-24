const Movie = require('../models/moviesModel')
const { body, validationResult } = require('express-validator')

const addMovie = async(req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const movie = await Movie.create({
            title: req.body.title,
            year: req.body.year,
            type: req.body.type,
            poster: req.body.poster
        })

        res.status(201).json({success: true, movie})
    } catch (error) {
        res.status(500).json({success: false, message: "Internal server error"})
    }
}

const deleteMovie = async (req, res) => {
    try {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const movieId = req.params.id; // Assuming the movie ID is passed in the URL parameter
  
      // Find the movie by ID and delete it
      const deletedMovie = await Movie.destroy({ where: { id: movieId } });
  
      if (deletedMovie === 0) {
        return res.status(404).json({ success: false, message: 'Movie not found' });
      }
  
      res.status(200).json({ success: true, message: 'Movie deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const movieValidator = [
    body('Title').exists().notEmpty().withMessage('Title is required'),
    body('year').exists().isInt({ min: 1800, max: new Date().getFullYear() }).withMessage('Invalid year'),
    body('type').exists().notEmpty().withMessage('Type is required'),
    body('Poster').exists().notEmpty().withMessage('Poster URL is required')
]

module.exports = {
    addMovie, movieValidator, deleteMovie
}