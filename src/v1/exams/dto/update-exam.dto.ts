import { PartialType } from '@nestjs/mapped-types';
import { CreateExamDto } from './create-exam.dto';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateExamDto extends PartialType(CreateExamDto) {

    @IsNotEmpty()
    @ApiProperty()
    id: number
}
