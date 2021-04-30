import { Aluno } from "../models/aluno.entity";
import { saveAluno, findAlunos, findByNome, findByCpf } from '../services/aluno.service';

async function create(aluno: Aluno){

        const alunoNomeExists = await findByNome(aluno.nome);
        const alunoCpfExists = await findByCpf(aluno.cpf);
    
        if( alunoNomeExists ) throw Error("Aluno já cadastrado com este nome!");
        if( alunoCpfExists ) throw Error("Aluno já cadastrado com este CPF!");

        return saveAluno(aluno);
    
}

async function findAll(){
    return await findAlunos();
}
export {create, findAll};