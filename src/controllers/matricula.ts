import { MatriculaDto } from "../dto/matriculaDto";
import { Aluno } from "../models/aluno.entity";
import { Fatura } from "../models/fatura.entity";
import { Matricula } from "../models/matricula.entity";
import fatura from "../routes/fatura";
import { findAlunoById } from "../services/aluno.service";
import { saveFatura } from "../services/fatura.service";
import { findInstituicaoById } from "../services/instituicao-de-ensino.service";
import { saveMatricula, findMatriculas, findByAlunoIdAndInstituicaoIdAndCursoName } from '../services/matricula.service';

async function create(matriculaDto: MatriculaDto){

        const matriculaAlunoInstituicaoExists = await findByAlunoIdAndInstituicaoIdAndCursoName(matriculaDto.alunoId, matriculaDto.instituicaoId, matriculaDto.nomeDoCurso);
        const instituicao = await findInstituicaoById(matriculaDto.instituicaoId);
        const aluno = await findAlunoById(matriculaDto.alunoId)

        if( matriculaAlunoInstituicaoExists ) throw Error("Aluno já está matriculado neste Curso!");
        if( !instituicao ) throw Error("Instituição não encontrada com ID informado!")
        if( !aluno ) throw Error("Aluno não encontrado com ID informado!");

        let faturas: Fatura[] =[];

        for(let i = 0; i < matriculaDto.quatidadeDeFaturas; i++ ){
           const date = new Date()
           date.setMonth((i+1),matriculaDto.diaDeVencimentoDaFatura);
           faturas.push(await saveFatura(
                                new Fatura( 
                                        ( matriculaDto.valorTotalDoCurso / matriculaDto.quatidadeDeFaturas), 
                                                date)));
        }

        return await saveMatricula(new Matricula(matriculaDto.valorTotalDoCurso, matriculaDto.quatidadeDeFaturas, matriculaDto.diaDeVencimentoDaFatura, matriculaDto.nomeDoCurso, faturas,instituicao, aluno));
  
}

async function findAll(){
    return await findMatriculas();
}
export {create, findAll};