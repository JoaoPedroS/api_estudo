
import { Clinic } from 'src/v1/clinic/entities/clinic.entity';
import { Exam } from 'src/v1/exams/entities/exam.entity';
import { Patient } from 'src/v1/patient/entities/patient.entity';
import { Entity, 
         PrimaryGeneratedColumn, 
         ManyToOne, 
         Column, 
         CreateDateColumn, 
         UpdateDateColumn, 
         DeleteDateColumn, 
         JoinColumn } from 'typeorm'

@Entity({ name: 'appointments' })
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'data_agendamento' })
    date: Date;

    @Column({ name: 'hora_agendamento' })
    time: string;

    @ManyToOne(() => Patient)
    @JoinColumn({ name: 'patient_id', referencedColumnName: 'id' })
    patient: Patient;

    @ManyToOne(() => Exam)
    @JoinColumn({ name: 'exam_id', referencedColumnName: 'id' })
    exam: Exam;

    @ManyToOne(() => Clinic)
    @JoinColumn({ name: 'clinc_id', referencedColumnName: 'id' })
    clinic: Clinic;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
