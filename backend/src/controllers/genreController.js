const { Ganres, MovieGenres }= require('../models');

exports.createGenre = async (req,res) =>{
        const { name } = req.body;

        try {
            const genre = await Ganres.create({ name });
            res.status(201).json(genre);
        } catch (err) {
            res.status(500).json({ message: 'Failed to create genre', error: err.message });
        }
    }

exports.deleteGenre = async (req,res) =>{
        const { id } = req.params;

        try {
            const genre = await Ganres.findByPk(id);

            if (!genre) {
                return res.status(404).json({ message: 'Genre not found' });
            }

            await genre.destroy();
            res.json({ message: 'Genre deleted' });
        } catch (err) {
            res.status(500).json({ message: 'Failed to delete genre', error: err.message });
        }
    }

exports.linkGenreToMovie = async (req,res) =>{
        const { filmId, genreId } = req.body;

        try {
            const link = await MovieGenres.create({ filmId, genreId });
            res.status(201).json(link);
        } catch (err) {
            res.status(500).json({ message: 'Failed to link genre to movie', error: err.message });
        }
    }

exports.getGenresByMovie = async (req,res) =>{
    const { filmId } = req.params;

    try {
        const genres = await MovieGenres.findAll({
              where: { filmId },
              include: [{ model: Ganres, as: 'genre' }]
        });

            res.json(genres.map(g => g.genre));
        } catch (err) {
            res.status(500).json({ message: 'Failed to get genres for movie', error: err.message });
    }
}