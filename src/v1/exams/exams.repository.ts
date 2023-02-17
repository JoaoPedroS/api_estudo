import { Repository } from 'typeorm';
import { Exam } from './entities/exam.entity';

export default class ExamsRepository extends Repository<Exam> {}

