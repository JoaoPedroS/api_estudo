import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Utils from 'src/utils/utils.class';
import { PatientRepository } from './patient.repository';
import { Patient } from './entities/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PatientRepository, Patient])],
  controllers: [PatientController],
  providers: [PatientService, Utils, PatientRepository]
})
export class PatientModule {}
