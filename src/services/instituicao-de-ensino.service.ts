import connection from "../config/typeorm-config";
import { InstituicaoDeEnsino } from "../models/instituicao-de-ensino.entity";


function saveInstituicaoDeEnsino(instituicaoDeEnsino: InstituicaoDeEnsino){
    return connection.then((con)=> con.getRepository(InstituicaoDeEnsino).save(instituicaoDeEnsino));
}

function findInstituicaoDeEnsino(){
    return connection.then((con)=> con.getRepository(InstituicaoDeEnsino).find());
}

function findByNome(nome: string){
    return connection.then((con)=> con.getRepository(InstituicaoDeEnsino).findOne({nome: nome}));
}

function findByCnpj(cnpj: string){
    return connection.then((con)=> con.getRepository(InstituicaoDeEnsino).findOne({cnpj: cnpj}));   
}

function findInstituicaoById(id: number){
    return connection.then((con)=> con.getRepository(InstituicaoDeEnsino).findOne({id: id}));   
}
export { saveInstituicaoDeEnsino, findInstituicaoDeEnsino, findByNome, findByCnpj, findInstituicaoById};
