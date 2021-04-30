import { InstituicaoDeEnsino } from "../models/instituicao-de-ensino.entity";
import { saveInstituicaoDeEnsino, findInstituicaoDeEnsino, findByNome, findByCnpj } from '../services/instituicao-de-ensino.service';

async function create(instituicaoDeEnsino: InstituicaoDeEnsino){

        const instituicaoNomeExists = await findByNome(instituicaoDeEnsino.nome);
        const instituicaoCnpjExists = await findByCnpj(instituicaoDeEnsino.cnpj);
      
        if( instituicaoNomeExists ) throw Error("Instituição já cadastrada com este nome!");
        if( instituicaoCnpjExists ) throw Error("Instituição já cadastrada com este CNPJ!");

        return saveInstituicaoDeEnsino(instituicaoDeEnsino);
    
}

async function findAll(){
    return await findInstituicaoDeEnsino();
}
export {create, findAll};