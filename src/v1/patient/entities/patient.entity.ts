import { Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'patient' })
export class Patient {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column({ name: 'data_nascimento' })
    dataNascimento: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
