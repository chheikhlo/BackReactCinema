const mongoose = require('mongoose')

const MoviesSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    titre: {
        type: String
    },
    description: {
        type: String
    },
    acteurs_principaux: {
        type: Array
    },
    date_de_sortie: {
        type: String
    },
    realisateur: {
        type: String
    }
})

module.exports = Movies = mongoose.model("Movies", MoviesSchema, "movies")

