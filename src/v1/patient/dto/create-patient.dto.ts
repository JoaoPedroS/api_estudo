import { IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @ApiProperty()
    cpf: string;

    @IsNotEmpty()
    @ApiProperty()
    dataNascimento: Date;
}
