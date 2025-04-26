const { Posts }= require('../models');

exports.createPost = async (req,res) =>{
    const { title, body, user_id, status } = req.body;

    try {
        const newPost = await Posts.create({ title, body, user_id, status });
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося створити пост', error: err.message });
    }
}

exports.getAllPosts = async (req,res) =>{
    try {
        const posts = await Posts.findAll();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося отримати пости', error: err.message });
    }
}

exports.updatePost = async (req,res) =>{
    const { id } = req.params;
    const { title, body, status } = req.body;

    try {
        const updated = await Posts.update(
            { title, body, status },
            { where: { id } }
        );

        if (updated[0] === 0) {
            return res.status(404).json({ message: 'Пост не знайдено' });
        }

        res.json({ message: 'Пост оновлено' });
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося оновити пост', error: err.message });
    }
}

exports.deletePost = async (req,res) =>{
    const { id } = req.params;

    try {
        const deleted = await Posts.destroy({ where: { id } });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Пост не знайдено' });
        }

        res.json({ message: 'Пост видалено' });
    } catch (err) {
        res.status(500).json({ message: 'Не вдалося видалити пост', error: err.message });
    }
}