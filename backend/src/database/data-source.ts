import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreatePowerRingsTable1742664264297 } from './migrations/1742664264297-CreatePowerRingsTable'
import { Rings } from "../models/rings"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "!Crato2001",
    database: "devvo_backend",
    synchronize: true,
    logging: false,
    entities: [Rings],
    migrations: [CreatePowerRingsTable1742664264297],
    subscribers: [],
})
