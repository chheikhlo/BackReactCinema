

// const movies = require('../movies.json')

// appel du modèle
const Movies = require('../models/Movies')

// afficher tous les films
const getMovies = (req, res) => {
    Movies.find()
        .then(movies =>{ res.status(200).json(movies) 
                console.log(movies)})
        .catch(err => res.status(404).json({ notFound: 'Movie(s) non trouver' }))
}

// afficher un films
const getMoviesById = (req, res) => {
    Movies.find({ "id": req.params.id })
        .then(movie => res.status(200).json(movie))
        .catch(err => res.status(404).json({ notFound: 'Movie non trouver' }))
}

// afficher un films
const addMovies = (req, res) => {

    const id = req.body.id;
    const image = req.body.image;
    const titre = req.body.titre;
    const description = req.body.description;
    const acteurs_principaux = req.body.acteurs_principaux;
    const date_de_sortie = req.body.date_de_sortie;
    const realisateur = req.body.realisateur;

    const newMovie = new Movies({
        id,
        image,
        titre,
        description,
        acteurs_principaux,
        date_de_sortie,
        realisateur
    });

    newMovie.save()
        .then(res.status(200).json({ message: " Film Créer avec succès"}))
        .catch(res.status(500).json({ error: "Erreur lors de l'ajout du film" }));

}

// modifier un film
const putMovies = (req, res) => {

    const id = req.params.id;

    Movies.findOneAndUpdate({ id: id }, req.body)
        .then(res.status(200).json({ message: 'Film modifié avec succès' }))
        .catch(res.status(404).json({ notFound: 'Film non modifier' }))
}

// supression d'un film
const deleteMovie = (req, res) => {
   
    const id = req.params.id;

    Movies.findOneAndRemove({ id: id })
        .then(res.status(200).json({ message: 'Film supprimé avec succès' }))
        .catch(res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du film' }));
};

module.exports = { getMovies, getMoviesById, addMovies, deleteMovie, putMovies }
