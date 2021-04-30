import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    ManyToOne,
    PrimaryColumn
    } from "typeorm";
import { Matricula } from "./matricula.entity";

export type Status = 'Aberta' | 'Atrasada' | 'Paga';

@Entity()   
export class Fatura {
    
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        name: 'valor_fatura',
        type: 'decimal'
    })
    valorDaFatura: number;    

    @Column({
        name: 'data_vencimento',
        type: 'date'
    })
    dataDeVencimento: Date;

    @ManyToOne(type => Matricula, matricula => matricula.faturas)
    matricula?: Matricula;

    @Column({
        type: 'enum',
        enum: ['Aberta', 'Atrasada', 'Paga'],
        default: 'Aberta'
    })
    status?: Status;

    constructor(
        valorDaFatura: number,
        dataDeVencimento: Date,
    ){
        this.valorDaFatura = valorDaFatura;
        this.dataDeVencimento = dataDeVencimento;
    }

}