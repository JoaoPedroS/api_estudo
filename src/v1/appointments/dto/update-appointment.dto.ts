import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateAppointmentDto } from './create-appointment.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {
    @IsNotEmpty()
    @ApiProperty()
    id: number;
}
