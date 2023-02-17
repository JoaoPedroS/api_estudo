
import { Exam } from 'src/v1/exams/entities/exam.entity';
import { Entity, 
         ManyToMany, 
         PrimaryGeneratedColumn, 
         Column, 
         CreateDateColumn, 
         UpdateDateColumn, 
         DeleteDateColumn, 
         JoinTable } from 'typeorm'

import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'clinics' })
export class Clinic {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @Column()
    adress: string;

    @ManyToMany(() => Exam)
    @JoinTable({
        name: 'clinic_exams',
        joinColumn: {
            name: 'clinic_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'exam_id',
            referencedColumnName: 'id'
        }
    })
    exams: Array<Exam>

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
