import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreatePowerRingsTable1742664264297 } from './migrations/1742664264297-CreatePowerRingsTable'
import { Rings } from "../models/Rings"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "db",  // Alterado de 'localhost' para 'db' (nome do serviço no Docker Compose)
    port: 3306,  // Deve bater com a porta interna do MySQL no container
    username: "devvo",
    password: "1234",
    database: "devvo_backend",
    synchronize: true,
    logging: false,
    entities: [Rings],
    migrations: [CreatePowerRingsTable1742664264297],
    subscribers: [],
})
