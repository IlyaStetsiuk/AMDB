const { Countries  }= require('../models');

exports.createCountry = async (req,res) =>{
    const { country } = req.body;

    try {
        const newCountry = await Countries.create({ country });
        res.status(201).json(newCountry);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося додати країну', error: err.message });
    }
}

exports.getAllCountries = async (req,res) =>{
    try {
        const countries = await Countries.findAll();
        res.json(countries);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося отримати країни', error: err.message });
    }
}

exports.updateCountry = async (req,res) =>{
    const { id } = req.params;
    const { country } = req.body;

    try {
        const updated = await Countries.update({ country }, { where: { id } });
        res.json({ message: 'Країну оновлено', updated });
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося оновити країну', error: err.message });
    }
}

exports.deleteCountry = async (req,res) =>{
    const { id } = req.params;

    try {
        await Countries.destroy({ where: { id } });
        res.json({ message: 'Країну видалено' });
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося видалити країну', error: err.message });
    }
}