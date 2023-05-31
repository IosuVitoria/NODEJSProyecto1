const express = require("express");
const {getMovies, getMovieById, getMovieByTitle, getMovieByGenre, getMoviesByYear} = require("../controllers/movies.controllers")
const moviesRoutes = express.Router();

// Este es el segundo archivo que se crea. Esto primero va a generar la posibilidad de enrutar.

moviesRoutes.get("/", getMovies);
moviesRoutes.get("/id/:id", getMovieById);
moviesRoutes.get("/id/:title", getMovieByTitle);
moviesRoutes.get("/genre/:genre", getMovieByGenre);
moviesRoutes.get("/year/:year", getMoviesByYear);


//Cogemos una película y en este caso seleccionamos por ID. El primer ID le permite saber al usuario
// que es lo que le va a pedir la búsqueda. GUÍA VISUAL.


module.exports = moviesRoutes;
// Se exporta para que funcione de nuevo el servidor. Maneja la información de los endpoint.


