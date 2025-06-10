import express from 'express'
import cors from 'cors';
import jobsRouter from './routes/jobs.js'
import connectDB from './config/db.js';

import dotenv from 'dotenv'
dotenv.config();

const PORT = 5000 || process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/jobs', jobsRouter);

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            // console.log(` Server running on http://localhost:${PORT}`);
        });
    });
