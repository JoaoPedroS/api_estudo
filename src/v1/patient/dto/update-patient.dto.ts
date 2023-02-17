import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreatePatientDto } from './create-patient.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
    @IsNotEmpty()
    @ApiProperty()
    id: number;
}
