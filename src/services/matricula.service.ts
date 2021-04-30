import connection from "../config/typeorm-config";
import { Matricula } from "../models/matricula.entity";

function saveMatricula(matricula: Matricula){
    return connection.then((con)=> con.getRepository(Matricula).save(matricula));
}

function findMatriculas(){
    return connection.then((con)=> con.getRepository(Matricula).find());
}

function findByAlunoIdAndInstituicaoIdAndCursoName(alunoId: number, instituicaoId: number, nomeDoCurso: string){
    return connection.then((con)=> con.getRepository(Matricula).findOne({ aluno: { id: alunoId }, instituicaoDeEnsino: { id: instituicaoId }, nomeDoCurso: nomeDoCurso }));
}

function findMatriculaById(id: number){
    return connection.then((con)=> con.getRepository(Matricula).find({id: id}));
}
export { saveMatricula, findMatriculas, findByAlunoIdAndInstituicaoIdAndCursoName, findMatriculaById};
