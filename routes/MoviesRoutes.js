const MoviesController = require('../controllers/MoviesControllers')
const router = require('express').Router()


// Tous les films
router.get('/', MoviesController.getMovies)

// afficher les details d'un film
router.get('/:id', MoviesController.getMoviesById)

// ajouter un film
router.post('/', MoviesController.addMovies)

// modifier un film
router.put('/putMovies/:id', MoviesController.putMovies)

// Supression d'un film
router.delete('/:id', MoviesController.deleteMovie)

module.exports = router;