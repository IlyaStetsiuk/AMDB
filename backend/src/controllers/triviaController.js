const { Trivia  }= require('../models');

exports.addTrivia= async (req,res) =>{
    const { filmId, trivia } = req.body;

    try {
        const newTrivia = await Trivia.create({ filmId, trivia });
        res.status(201).json(newTrivia);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося додати цікавинку', error: err.message });
    }
}

exports.getTriviaByFilm= async (req,res) =>{
    const { filmId } = req.params;

    try {
        const triviaList = await Trivia.findAll({ where: { filmId } });
        res.json(triviaList);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося отримати цікавинку', error: err.message });
    }
}