import express  from 'express';
import validarInstituicaoDeEnsino from './middleware/validarInstituicaoDeEnsino';
import {create, findAll} from './../controllers/instituicao-de-ensino';

const instituicaoDeEnsino = express.Router();

instituicaoDeEnsino.post('/', validarInstituicaoDeEnsino , async (req, res) => {
    try {
        const resposta = await create(req.body);
        res.status(200).send(resposta);
    } catch(err) {
        res.status(400).send({message: err.message, status: 400});
    }

})

instituicaoDeEnsino.get('/', async (req, res) => {
    try {
        const resposta = await findAll();
        res.status(200).send(resposta);
    } catch(err) {
        res.status(400).send({message: err.message, status: 400});
    }
})

export default instituicaoDeEnsino;