import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ClinicRepository from './clinic.repository';
import Utils from 'src/utils/utils.class';
import { Clinic } from './entities/clinic.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ClinicRepository, Clinic])],
  controllers: [ClinicController],
  providers: [ClinicService, Utils]
})
export class ClinicModule {}
