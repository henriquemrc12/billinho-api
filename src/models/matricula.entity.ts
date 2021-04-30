import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToMany
    } from "typeorm";
import { Aluno } from "./aluno.entity";
import { Fatura } from "./fatura.entity";
import { InstituicaoDeEnsino } from "./instituicao-de-ensino.entity";

@Entity()
export class Matricula {
    
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({
        name: 'valor_total_curso',
        type: 'int'
    })
    valorTotalDoCurso: number;

    @Column({
        name: 'quantidade_de_faturas',
        type: 'decimal'
    })
    quatidadeDeFaturas: number;

    @Column({
        name: 'dia_vencimento_fatura',
        type: 'int'
    })
    diaDeVencimentoDaFatura: number;

    @Column({
        name: 'nome_curso',
        type: 'varchar'
    })
    nomeDoCurso: string;

    @ManyToOne(type => InstituicaoDeEnsino, InstituicaoDeEnsino => InstituicaoDeEnsino.matriculas, { eager: true })
    instituicaoDeEnsino: InstituicaoDeEnsino;

    @ManyToOne(type => Aluno, aluno => aluno.matriculas, { eager: true })
    aluno: Aluno;
    
    @OneToMany(type => Fatura, fatura => fatura.matricula, { eager: true })
    @JoinColumn()
    faturas: Fatura[];

    constructor(
        valorTotalDoCurso: number,
        quatidadeDeFaturas: number,
        diaDeVencimentoDaFatura: number,
        nomeDoCurso: string,
        faturas: Fatura[],
        instituicaoDeEnsino: InstituicaoDeEnsino,
        aluno: Aluno
    ) {
        this.valorTotalDoCurso = valorTotalDoCurso;
        this.quatidadeDeFaturas = quatidadeDeFaturas;
        this.diaDeVencimentoDaFatura = diaDeVencimentoDaFatura;
        this.nomeDoCurso = nomeDoCurso;
        this.faturas = faturas;
        this.instituicaoDeEnsino = instituicaoDeEnsino;
        this.aluno = aluno;
    }
    

    
}

