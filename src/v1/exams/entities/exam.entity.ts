import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'exams' })
export class Exam {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    name: string;

    @Column()
    duration: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
