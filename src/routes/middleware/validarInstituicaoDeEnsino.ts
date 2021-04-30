import express, { NextFunction, Request, Response }  from 'express';

function validarInstituicaoDeEnsino(req: Request, res: Response, next: NextFunction) {
    
    ['nome', 'cnpj','tipo'].forEach((item) => Object.keys(req.body).indexOf(item) > -1 ? '' : res.status(400).send({message: `O campo '${item}' é obrigatório!`, status: 400}));
    
    const cnpjRegex = new RegExp("^([0-9]){14}$");
    
    if( !cnpjRegex.test(req.body.cnpj) ) return res.status(400).send({message: 'CNPJ inválido!', status: 400});
    
    if( !['Universidade', 'Escola', 'Creche'].includes(req.body.tipo) ) res.status(400).send({message: 'Tipo de instituição inválida!', status: 400});

    next();
}

export default validarInstituicaoDeEnsino;