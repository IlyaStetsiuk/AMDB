import { Comments, Users } from '../models';

exports.createComment = async (req,res) =>{
    const { movieID, comment } = req.body;
    const userID = req.user.id;

    try {
        const newComment = await Comments.create({ movieID, userID, comment });
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create comment', error: err.message });
    }
}

exports.getCommentsByMovie = async (req,res) =>{
    const { movieID } = req.params;

    try {
        const comments = await Comments.findAll({
            where: { movieID },
            include: [{ model: Users, attributes: ['username', 'profilePicture'] }],
            order: [['id', 'DESC']]
        });

        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get comments', error: err.message });
    }
}

exports.deleteComment = async (req,res) =>{
    const { id } = req.params;
    const userID = req.user.id;

    try {
        const comment = await Comments.findByPk(id);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if (comment.userID !== userID) {
            return res.status(403).json({ message: 'You can delete only your own comments' });
        }

        await comment.destroy();
        res.json({ message: 'Comment deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete comment', error: err.message });
    }
}