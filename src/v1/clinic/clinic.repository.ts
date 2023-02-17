import { Repository } from "typeorm";
import { Clinic } from "./entities/clinic.entity";

export default class ClinicRepository extends Repository<Clinic> {}