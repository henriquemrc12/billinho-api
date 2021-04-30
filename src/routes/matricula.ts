import express  from 'express';
import { findAll } from '../controllers/matricula';
import { create } from '../controllers/matricula';
import validarMatricula from './middleware/validarMatricula';

const matricula = express.Router();

matricula.post('/', validarMatricula ,async (req, res) => {
    try {
        const resposta = await create(req.body);
        res.status(200).send(resposta);
    } catch(err) {
        res.status(400).send({message: err.message, status: 400});
    }
})

matricula.get('/', async (req, res) => {
    try {
        const resposta = await findAll();
        res.status(200).send(resposta);
    } catch(err) {
        res.status(400).send({message: err.message, status: 400});
    }
})

export default matricula;