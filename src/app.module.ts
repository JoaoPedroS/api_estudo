import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppointmentsModule } from './v1/appointments/appointments.module';
import { Appointment } from './v1/appointments/entities/appointment.entity';
import { ClinicModule } from './v1/clinic/clinic.module';
import { Clinic } from './v1/clinic/entities/clinic.entity';
import { Exam } from './v1/exams/entities/exam.entity';
import { ExamsModule } from './v1/exams/exams.module';
import { Patient } from './v1/patient/entities/patient.entity';
import { PatientModule } from './v1/patient/patient.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        Patient,
        Clinic,
        Appointment,
        Exam
      ],
      synchronize: true,
    }),
    ExamsModule,
    ClinicModule,
    AppointmentsModule,
    PatientModule
  ],
  providers: [AppService],
})
export class AppModule {}
