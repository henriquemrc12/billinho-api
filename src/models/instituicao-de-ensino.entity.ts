import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
    PrimaryColumn
    } from "typeorm";
import { Matricula } from "./matricula.entity";

export type TipoInstituicao = 'Escola' | 'Universidade' | 'Creche'

@Entity()
export class InstituicaoDeEnsino {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ 
        unique: true,
        type: 'varchar'
    })
    nome: string;

    @Column({ 
        unique: true,
        type: 'varchar'
    })
    cnpj: string;

    @Column({
        type: 'enum',
        enum: ['Escola', 'Universidade', 'Creche']
    })
    tipo: TipoInstituicao

    @OneToMany(type => Matricula, matricula => matricula.aluno)
    @JoinColumn()
    matriculas: Matricula[];
    
    constructor( id: number, nome: string, cnpj: string, tipo: TipoInstituicao, matriculas: Matricula[] ){
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.tipo = tipo;
        this.matriculas = matriculas;
    }
    
}