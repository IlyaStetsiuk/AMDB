const { Quotes  }= require('../models');

exports.addQuote= async (req,res) =>{
    const { filmId, quote } = req.body;

    try {
        const newQuote = await Quotes.create({ filmId, quote });
        res.status(201).json(newQuote);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося додати цитату', error: err.message });
    }
}

exports.getQuotesByFilm= async (req,res) =>{
    const { filmId } = req.params;

    try {
        const quotes = await Quotes.findAll({ where: { filmId } });
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося отримати цитати', error: err.message });
    }
}