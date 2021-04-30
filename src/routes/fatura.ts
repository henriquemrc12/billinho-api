import express  from 'express';
import { findAll } from '../controllers/fatura';

const fatura = express.Router();

fatura.get('/', async (req, res) => {
    try {
        const resposta = await findAll();
        res.status(200).send(resposta);
    } catch(err) {
        res.status(400).send({message: err.message, status: 400});
    }
})

export default fatura;