const { Reviews }= require('../models');

exports.addReview= async (req,res) =>{
    const { review, filmId } = req.body;

    try {
        const newReview = await Reviews.create({ review, filmId });
        res.status(201).json(newReview);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося додати рецензію', error: err.message });
    }
}

exports.getReviewsByFilm= async (req,res) =>{
    const { filmId } = req.params;

    try {
        const reviews = await Reviews.findAll({ where: { filmId } });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося отримати рецензії', error: err.message });
    }
}
