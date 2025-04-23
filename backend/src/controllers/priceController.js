const { Prices }= require('../models');

exports.addPrice= async (req,res) =>{
    const { price, country, filmId } = req.body;

    try {
        const newPrice = await Prices.create({ price, country, filmId });
        res.status(201).json(newPrice);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося додати ціну', error: err.message });
    }
}

exports.getPricesByFilm= async (req,res) =>{
    const { filmId } = req.params;

    try {
        const prices = await Prices.findAll({ where: { filmId } });
        res.json(prices);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося отримати ціни', error: err.message });
    }
}
