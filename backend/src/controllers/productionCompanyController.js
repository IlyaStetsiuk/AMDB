const { ProductionCompanies }= require('../models');

exports.createCompany = async (req,res) =>{
    const { company, filmId } = req.body;

    try {
        const newCompany = await ProductionCompanies.create({ company, filmId });
        res.status(201).json(newCompany);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося додати компанію', error: err.message });
    }
}

exports.getAllCompanies = async (req,res) =>{
    try {
        const companies = await ProductionCompanies.findAll();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося отримати компанії', error: err.message });
    }
}

exports.updateCompany = async (req,res) =>{
    const { id } = req.params;
    const { company } = req.body;

    try {
        const updated = await ProductionCompanies.update({ company }, { where: { id } });
        res.json({ message: 'Компанію оновлено', updated });
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося оновити компанію', error: err.message });
    }
}

exports.deleteCompany = async (req,res) =>{
    const { id } = req.params;

    try {
        await ProductionCompanies.destroy({ where: { id } });
        res.json({ message: 'Компанію видалено' });
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося видалити компанію', error: err.message });
    }
}