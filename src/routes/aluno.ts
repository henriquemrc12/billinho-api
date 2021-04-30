import express  from 'express';
import { findAll, create } from '../controllers/aluno';
import validarAluno from './middleware/validarAluno';

const aluno = express.Router();

aluno.post('/', validarAluno ,async (req, res) => {
    try {
        const resposta = await create(req.body);
        res.status(200).send(resposta);
    } catch(err) {
        res.status(400).send({message: err.message, status: 400});
    }
})

aluno.get('/', async (req, res) => {
    try {
        const resposta = await findAll();
        res.status(200).send(resposta);
    } catch(err) {
        res.status(400).send({message: err.message, status: 400});
    }
})

export default aluno;