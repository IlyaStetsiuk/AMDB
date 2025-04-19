const { Movie } = require('../models');


    exports.getAllMovies = async (req, res) => {
        try {
            const movies = await Movie.findAll();
            res.json(movies);
        } catch (err) {
            res.status(500).json({ message: 'Failed to fetch movies', error: err.message });
        }
    }

    exports.getMovieById = async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id);
            if (!movie) return res.status(404).json({ message: 'Movie not found' });
            res.json(movie);
        } catch (err) {
            res.status(500).json({ message: 'Error retrieving movie', error: err.message });
        }
    }

    exports.createMovie = async (req, res) => {
        try {
            const newMovie = await Movie.create(req.body);
            res.status(201).json(newMovie);
        } catch (err) {
            res.status(400).json({ message: 'Failed to create movie', error: err.message });
        }
    }

    exports.updateMovies = async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id);
            if (!movie) return res.status(404).json({ message: 'Movie not found' });

            await movie.update(req.body);
            res.json(movie);
        } catch (err) {
            res.status(400).json({ message: 'Failed to update movie', error: err.message });
        }
    }

    exports.deleteMovie = async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id);
            if (!movie) return res.status(404).json({ message: 'Movie not found' });

            await movie.destroy();
            res.json({ message: 'Movie deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Failed to delete movie', error: err.message });
        }
    }
