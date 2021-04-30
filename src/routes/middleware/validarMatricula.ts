import express, { NextFunction, Request, Response }  from 'express';

function validarMatricula(req: Request, res: Response, next: NextFunction) {
    [
        'valorTotalDoCurso', 
        'quatidadeDeFaturas',
        'diaDeVencimentoDaFatura', 
        'nomeDoCurso', 
        'alunoId', 
        'instituicaoId' ].forEach((item) => Object.keys(req.body).indexOf(item) > -1 ? '' : res.status(400).send({message: `O campo '${item}' é obrigatório!`, status: 400}));
    if(req.body.valorTotalDoCurso == 0) res.status(400).send({message: 'O valor total do curso deve ser maior que 0 reais!', status: 400});
    if(req.body.quatidadeDeFaturas == 0) res.status(400).send({message: 'A quantidade de faturas deve ser maior ou igual a 1!', status: 400}); 
    if(req.body.diaDeVencimentoDaFatura < 1 || req.body.diaDeVencimentoDaFatura > 31) res.status(400).send({message: 'O dia de vencimento deve ser maior/igual a 1 e menor/igual a 31!', status: 400})
    next();
}

export default validarMatricula;