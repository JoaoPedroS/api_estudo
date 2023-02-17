import { Repository } from "typeorm";
import { Patient } from "./entities/patient.entity";

export class PatientRepository extends Repository<Patient> {}