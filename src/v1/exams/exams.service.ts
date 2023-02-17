import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';
import ExamsRepository from './exams.repository';

@Injectable()
export class ExamsService {

  constructor(
    @InjectRepository(Exam)
    private examRepository: ExamsRepository
  ) {}

  public async create(createExamDto: CreateExamDto): Promise<Exam> {
    try {
      return await this.examRepository.save(createExamDto);
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao cadastrar exame: ", message)
    }
  }

  public async findAll(): Promise<Array<Exam>> {
    try {
      return await this.examRepository.find();
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao buscar exames: ", message)
    }
  }

  public async findOne(id: number): Promise<Exam> {
    try {
      return await this.examRepository.findOne({ where: {id} });
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException(`Erro ao buscar exame com id ${id}: `, message)
    }
  }

  public async update(updateExamDto: UpdateExamDto): Promise<Exam> {
    try {
      return await this.examRepository.save(updateExamDto);
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao atualizar exame: ", message)
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      await this.examRepository.softDelete(id);
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao excluir exame: ", message)
    }
  }
}
