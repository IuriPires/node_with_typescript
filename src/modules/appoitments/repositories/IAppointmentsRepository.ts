import Appoitment from '../infra/typeorm/entities/Appointment';

export interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appoitment | undefined>;
}
