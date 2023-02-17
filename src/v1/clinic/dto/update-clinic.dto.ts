import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicDto } from './create-clinic.dto';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClinicDto extends PartialType(CreateClinicDto) {
    @IsNotEmpty()
    @ApiProperty()
    id: number;
}
