import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { AppointmentRepository } from './appointments.repository';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentsService {

  constructor(
      @InjectRepository(Appointment)
      private appointmentRepository: AppointmentRepository
  ) {}

  public async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    try {
      return await this.appointmentRepository.save(createAppointmentDto); 
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao cadastrar agendamento", message)
    }
  }

  public async findAll(): Promise<Array<Appointment>> {
    try {
      return await this.appointmentRepository.find();
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao buscar agendamentos", message)
    }
  }

  public async findOne(id: number): Promise<Appointment> {
    try {
      return await this.appointmentRepository.findOne({ where: {id} });
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException(`Erro ao buscar agendamento com id ${id}: `, message)
    }
  }

  public async update(updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    try {
      return await this.appointmentRepository.save(updateAppointmentDto); 
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao atualizar agendamento", message)
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      await this.appointmentRepository.softDelete(id);
    } catch (error) {
      const message = error?.response?.data?.message ?? error?.message;
      throw new BadRequestException("Erro ao excluir agendamento", message)
    }
  }
}
