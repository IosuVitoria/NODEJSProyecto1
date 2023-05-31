// Antes de generar los métodos get se realizan los controladores.

const Movie = require("../models/movie.models")

//Punto 4. Genera una búsqueda que nos permita recuperar todas las películas.

const getMovies = async(req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

//Punto 5. Genera una búsqueda que nos devuelva las películas por el id.

const getMovieById = async (req, res) => {
    console.log("esta es la funcion id");
    const id = req.params.id;
    try {
      const movieById = await Movie.findById(id);
      return res.status(200).json(movieById);
    } catch (error) {
      return res.status(500).json(error);
    }
};


//Punto 6. Genera una búsqueda que nos devuelva las películas por el título.

const getMovieByTitle = async (req, res) => {
    console.log("Esta es la función por título");
    const title = req.params.title;
    try {
        const movieByTitle = await Movie.findOne({ title: title });
        if (movieByTitle) {
            return res.status(200).json(movieByTitle);
        } else {
            return res.status(404).json({ message: "Película no encontrada" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Punto 7. Genera una búsqueda que nos devuelva las películas por el género.

const getMovieByGenre = async (req, res) => {
    console.log("Esta es la función por género");
    const genre = req.params.genre;
    try {
        const movieByGenre = await Movie.find({ genre: genre });
        if (movieByGenre) {
            return res.status(200).json(movieByGenre);
        } else {
            return res.status(404).json({ message: "Género no reconocido, pruebe otro." });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Punto 8. Genera una búsqueda que nos devuelve las películas por año superior a 2010.

const getMoviesByYear = async (req, res) => {
    console.log("Esta es la función por año");
    const year = 2010; // Genero una variable para poder utilizar en el filtro.

    try {
        const moviesByYear = await Movie.find({ year: { $gte: year } });
        return res.status(200).json(moviesByYear);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = { getMovies, getMovieById, getMovieByTitle, getMovieByGenre, getMoviesByYear};

