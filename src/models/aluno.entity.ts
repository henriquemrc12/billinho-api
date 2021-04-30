import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
    PrimaryColumn
    } from "typeorm";
import { Matricula } from "./matricula.entity";

export type TipoGenero = 'M' | 'F';
export type MetodoDePagamento = 'Boleto' | 'Cartão'

@Entity()
export class Aluno {

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
    cpf: string;    

    @Column({
        type: 'date',
        name: "data_nascimento"
    })
    dataDeNascimento: Date;
    
    @Column({
        type: "bigint",
        name: "telefone_celular"
    })
    telefoneCelular: number;

    @Column({
        type: 'enum',
        enum: ['M', 'F']
    })
    genero: TipoGenero;

    @Column({
        name: 'metodo_pagamento',
        type: 'enum',
        enum: ['Boleto', 'Cartão']
    })
    metodoDePagamento: MetodoDePagamento;

    @OneToMany(type => Matricula, matricula => matricula.aluno)
    @JoinColumn()
    matriculas: Matricula[];

    constructor(
        id: number, 
        nome: string, 
        cpf: string, 
        dataDeNascimento: Date, 
        telefoneCelular: number, 
        genero: TipoGenero, 
        metodoDePagamento: MetodoDePagamento,
        matriculas: Matricula[]
        ){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
        this.telefoneCelular = telefoneCelular;
        this.genero = genero;
        this.metodoDePagamento = metodoDePagamento;
        this.matriculas = matriculas;
    }
}

