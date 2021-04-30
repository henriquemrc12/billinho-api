import { Connection, createConnection } from "typeorm";
import { InstituicaoDeEnsino } from "../models/instituicao-de-ensino.entity";
import * as dotenv from 'dotenv';
import { Aluno } from "../models/aluno.entity";
import { Fatura } from "../models/fatura.entity";
import { Matricula } from "../models/matricula.entity";
dotenv.config();

const connection: Promise<Connection> = createConnection({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT) ||  5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    entities: [
        InstituicaoDeEnsino,
        Aluno,
        Fatura,
        Matricula
    ],
});

export = connection;
