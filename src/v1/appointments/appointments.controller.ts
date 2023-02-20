import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiAppointmentSwagger } from 'src/decorators/api.agendamento.swagger.decorator';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';


@Controller({
  path: 'appointments',
  version: '1'
})
@ApiAppointmentSwagger('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Get()
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentsService.findOne(+id);
  }

  @Patch()
  update(@Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentsService.update(updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(+id);
  }
}
