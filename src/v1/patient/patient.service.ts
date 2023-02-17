import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import Utils from 'src/utils/utils.class';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { PatientRepository } from './patient.repository';

@Injectable()
export class PatientService {

  constructor(
    @InjectRepository(Patient)
    private patientRepository: PatientRepository,
    private utils: Utils  
  ) {}

  public async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    try {
      createPatientDto.cpf = this.utils.cpfFormat(createPatientDto.cpf);
      return await this.patientRepository.save(createPatientDto);
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao cadastrar paciente: ", message)
    }
    
  }

  public async findAll(): Promise<Array<Patient>> {
    try {
      return await this.patientRepository.find();  
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao buscar pacientes: ", message)
    }
  }

  public async findOne(id: number): Promise<Patient> {
    try {
      return await this.patientRepository.findOne({ where: {id} }); 
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException(`Erro ao buscar paciente de id ${id}: `, message)
    }
  }

  public async update(updatePatientDto: UpdatePatientDto): Promise<Patient> {
    try {
      updatePatientDto.cpf = this.utils.cpfFormat(updatePatientDto.cpf);
      return await this.patientRepository.save(updatePatientDto); 
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao atualizar paciente: ", message)
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      await this.patientRepository.softDelete(id); 
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao excluir paciente: ", message)
    }
  }
}
