import { IsNotEmpty } from "class-validator";
import { Clinic } from "src/v1/clinic/entities/clinic.entity";
import { Exam } from "src/v1/exams/entities/exam.entity";
import { Patient } from "src/v1/patient/entities/patient.entity";
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDto {
    @IsNotEmpty()
    @ApiProperty()
    date: Date;

    @IsNotEmpty()
    @ApiProperty()
    time: string;

    @IsNotEmpty()
    @ApiProperty()
    patient: Patient;

    @IsNotEmpty()
    @ApiProperty()
    exam: Exam;

    @IsNotEmpty()
    @ApiProperty()
    clinic: Clinic;
}
