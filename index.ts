import express from 'express';
import { Request, Response } from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import sequelize from './src/shared/configs/db';
import userRoutes from './src/routers/user.router';

dotenv.config();

const app = express();
const port = 3001;


app.use(bodyParser.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World')
})

function start() {
    app.listen(port, async () => {
        try {
            await sequelize.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        console.log(`Server is running at http://localhost:${port}`);
    });
}

start();

module.exports = app;