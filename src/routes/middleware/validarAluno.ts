import express, { NextFunction, Request, Response }  from 'express';

function validarAluno(req: Request, res: Response, next: NextFunction) {

    [
        'nome', 
        'cpf',
        'dataDeNascimento', 
        'telefoneCelular', 
        'genero', 
        'metodoDePagamento' ].forEach((item) => Object.keys(req.body).indexOf(item) > -1 ? '' : res.status(400).send({message: `O campo '${item}' é obrigatório!`, status: 400}));
    
    const cpfRegex = new RegExp("^([0-9]){11}$");
    if( !cpfRegex.test(req.body.cpf) ) return res.status(400).send({message: 'CPF inválido!', status: 400});
    if( !['M', 'F'].includes(req.body.genero) ) res.status(400).send({message: 'Gênero inválido!', status: 400});
    if( !['Boleto', 'Cartão'].includes(req.body.metodoDePagamento) ) res.status(400).send({message: 'Método de pagamento inválido!', status: 400});

    next();
}

export default validarAluno;