import connection from "../config/typeorm-config";
import { Aluno } from "../models/aluno.entity";

function saveAluno(aluno: Aluno){
    return connection.then((con)=> con.getRepository(Aluno).save(aluno));
}

function findAlunos(){
    return connection.then((con)=> con.getRepository(Aluno).find());
}

function findByNome(nome: string){
    return connection.then((con)=> con.getRepository(Aluno).findOne({nome: nome}));
}

function findByCpf(cpf: string){
    return connection.then((con)=> con.getRepository(Aluno).findOne({cpf: cpf}));
}

function findAlunoById(id: number){
    return connection.then((con)=> con.getRepository(Aluno).findOne({id: id}));
}
export { saveAluno, findAlunos, findByNome, findByCpf, findAlunoById};