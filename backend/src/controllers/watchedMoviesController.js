import { WatchedMovies, Movie} from '../models';

exports.markAsWatched = async (req,res) =>{
    const { movieID } = req.body;
    const userID = req.user.id;

    try {
        const alreadyWatched = await WatchedMovies.findOne({ where: { movieID, userID } });
        if (alreadyWatched) {
            return res.status(400).json({ message: 'Movie already marked as watched' });
        }

        const watched = await WatchedMovies.create({ movieID, userID });
        res.status(201).json(watched);
    } catch (err) {
        res.status(500).json({ message: 'Error marking movie as watched', error: err.message });
    }

}

exports.updateRatings = async (req,res) =>{
    const { movieID, rating } = req.body;
    const userID = req.user.id;

    try {
        const watched = await WatchedMovies.findOne({ where: { movieID, userID } });

        if (!watched) {
            return res.status(404).json({ message: 'Movie not marked as watched' });
        }

        watched.rating = rating;
        await watched.save();

        res.json({ message: 'Rating updated', watched });
    } catch (err) {
        res.status(500).json({ message: 'Failed to update rating', error: err.message });
    }
}



exports.getWatchedByUser = async (req,res) =>{
    const userID = req.user.id;

    try {
        const watchedMovies = await WatchedMovies.findAll({
            where: { userID },
            include: [{ model: Movie }],
        });

        res.json(watchedMovies);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching watched movies', error: err.message });
    }
}
