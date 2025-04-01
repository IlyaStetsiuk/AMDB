import express from 'express';
import cors from 'cors';
import router from './src/router/router.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use((err, req, res, next) => {
    console.error(err);

    if (err.code === 'INVALID_FILE_TYPE') {
        return res.status(400).json({ message: err.message });
    }

    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
});

const start = async () => {

    try {

        const server = app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
        await mongoose.connect(process.env.MONGODB_URI);

    }

    catch (error) {
        console.log(error);
    }
};

start();