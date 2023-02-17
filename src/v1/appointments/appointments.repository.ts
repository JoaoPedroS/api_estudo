import { Repository } from "typeorm";
import { Appointment } from "./entities/appointment.entity";

export class AppointmentRepository extends Repository<Appointment> {}