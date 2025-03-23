import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './database/data-source';
import ringsRoutes from "./routes/rings.routes";

const app = express()

app.use(express.json());
app.use('/api', ringsRoutes)

AppDataSource.initialize().then(async () => {
    console.log('Conectado com Database rodando')
    app.listen(3333, () => {
        console.log('Servidor iniciado')
    })
})