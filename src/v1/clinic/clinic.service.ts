import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Utils from 'src/utils/utils.class';
import ClinicRepository from './clinic.repository';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';
import { Clinic } from './entities/clinic.entity';

@Injectable()
export class ClinicService {
  constructor(
    @InjectRepository(Clinic)
    private clinicRepository: ClinicRepository,
    private utils: Utils
  ) {}

  public async create(createClinicDto: CreateClinicDto): Promise<Clinic> {
    try {
      createClinicDto.cnpj = this.utils.cnpjFormat(createClinicDto.cnpj);
      return await this.clinicRepository.save(createClinicDto);
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao cadastrar clínica: ", message);
    }
  }

  public async findAll(): Promise<Array<Clinic>> {
    try {
      return await this.clinicRepository.find();
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao buscar clinicas: ", message);
    }
  }

  public async findOne(id: number): Promise<Clinic> {
    try {
      return await this.clinicRepository.findOne({ where: {id} });
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException(`Erro ao buscar clínica de id ${id} : `, message);
    }
  }

  public async update(updateClinicDto: UpdateClinicDto): Promise<Clinic> {
    try {
      updateClinicDto.cnpj = this.utils.cnpjFormat(updateClinicDto.cnpj);
      return await this.clinicRepository.save(updateClinicDto); 
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao atualizar clinica: ", message);
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      await this.clinicRepository.softDelete(id);
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao excluir clinica: ", message) 
    }
  }
}
