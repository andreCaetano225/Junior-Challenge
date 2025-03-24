import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './database/data-source';
import ringsRoutes from "./routes/rings.routes";
import cors from 'cors'
import setupSwagger from './swagger';



const app = express()
app.use(cors());
app.use(express.json());
app.use('/api', ringsRoutes)

setupSwagger(app)


AppDataSource.initialize().then(async () => {
    console.log('Database init')
    app.listen(3000, () => {
        console.log('Server init')
    })
})