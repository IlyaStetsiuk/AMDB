const { photos }= require('../models');

exports.addPhoto = async (req,res) =>{
    const { link, filmId } = req.body;

    try {
        const photo = await photos.create({ link, filmId });
        res.status(201).json(photo);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add photo', error: err.message });
    }
}


exports.getPhotosByFilm = async (req,res) =>{
    const { filmId } = req.params;

    try {
        const photos_t = await photos.findAll({ where: { filmId } });
        res.json(photos_t);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get photos', error: err.message });
    }
}


exports.deletePhoto = async (req,res) =>{
    const { id } = req.params;

    try {
        const photo = await photos.findByPk(id);

        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' });
        }

        await photo.destroy();
        res.json({ message: 'Photo deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete photo', error: err.message });
    }

}