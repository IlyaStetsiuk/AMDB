const { Actors, FilmActors }= require('../models');

exports.createActor = async (req,res) =>{
    const { name, sername } = req.body;

    try {
        const actor = await Actors.create({ name, sername });
        res.status(201).json(actor);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create actor', error: err.message });
    }
}

exports.linkActorToFilm = async (req,res) =>{
    const { actorId, filmId } = req.body;

    try {
        const link = await FilmActors.create({ actorId, filmId });
        res.status(201).json(link);
    } catch (err) {
        res.status(500).json({ message: 'Failed to link actor to film', error: err.message });
    }
}

exports.getActorsByFilm = async (req,res) =>{
    const { filmId } = req.params;

    try {
        const actors = await FilmActors.findAll({
            where: { filmId },
            include: [{ model: Actors, as: 'actor' }]
        });

        res.json(actors.map(a => a.actor));
    } catch (err) {
        res.status(500).json({ message: 'Failed to get actors for film', error: err.message });
    }
}