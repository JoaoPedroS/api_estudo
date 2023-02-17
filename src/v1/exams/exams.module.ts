import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ExamsRepository from './exams.repository';
import { Exam } from './entities/exam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamsRepository, Exam])],
  controllers: [ExamsController],
  providers: [ExamsService]
})
export class ExamsModule {}
