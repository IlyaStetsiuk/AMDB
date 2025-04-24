const { Goofs }= require('../models');

exports.addGoof= async (req,res) =>{
    const { filmId, goof } = req.body;

    try {
        const newGoof = await Goofs.create({ filmId, goof });
        res.status(201).json(newGoof);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося додати помилку', error: err.message });
    }
}

exports.getGoofsByFilm= async (req,res) =>{
    const { filmId } = req.params;

    try {
        const goofs = await Goofs.findAll({ where: { filmId } });
        res.json(goofs);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося отримати помилки', error: err.message });
    }
}