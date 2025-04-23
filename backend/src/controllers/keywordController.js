const { Keywords, FilmKeywords }= require('../models');

exports.addKeyword = async (req,res) =>{
    const { keyword } = req.body;

    try {
        const newKeyword = await Keywords.create({ keyword });
        res.status(201).json(newKeyword);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося додати ключове слово', error: err.message });
    }
}

exports.associateKeywordWithFilm = async (req,res) =>{
    const { filmId, keywordId } = req.body;

    try {
        const newAssociation = await FilmKeywords.create({ filmId, keywordId });
        res.status(201).json(newAssociation);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося прив’язати ключове слово до фільму', error: err.message });
    }
}

exports.getFilmsByKeyword = async (req,res) =>{
    const { keyword } = req.params;

    try {
        const keywordRecord = await Keywords.findOne({ where: { keyword } });

        if (!keywordRecord) {
            return res.status(404).json({ message: 'Ключове слово не знайдено' });
        }

        const films = await FilmKeywords.findAll({
            where: { keywordId: keywordRecord.id },
            include: { model: Films, attributes: ['name', 'id'] }
        });

        res.json(films);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося отримати фільми за ключовим словом', error: err.message });
    }
}