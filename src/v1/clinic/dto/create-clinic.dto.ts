import { IsNotEmpty } from "class-validator";
import { Exam } from "src/v1/exams/entities/exam.entity";
import { ApiProperty } from '@nestjs/swagger';
export class CreateClinicDto {

    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @ApiProperty()
    cnpj: string;

    @IsNotEmpty()
    @ApiProperty()
    adress: string;

    @IsNotEmpty()
    @ApiProperty()
    exams: Array<Exam>
}
