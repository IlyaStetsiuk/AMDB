const { AwardType, Awards, Movies }= require('../models');

exports.createAwardType = async (req,res) =>{
    const { name } = req.body;

    try {
        const awardType = await AwardType.create({ name });
        res.status(201).json(awardType);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create award type', error: err.message });
    }
}

exports.giveAwardToFilm = async (req,res) =>{
    const { awardTypeId, filmId } = req.body;

    try {
        const award = await Awards.create({ awardTypeId, filmId });
        res.status(201).json(award);
    } catch (err) {
        res.status(500).json({ message: 'Failed to assign award', error: err.message });
    }
}

exports.getAwardsByFilm = async (req,res) =>{
    const { filmId } = req.params;

    try {
        const awards = await Awards.findAll({
            where: { filmId },
            include: [{ model: AwardType, as: 'awardType' }]
        });

        res.json(awards.map(a => a.awardType));
    } catch (err) {
        res.status(500).json({ message: 'Failed to get awards for film', error: err.message });
    }
}