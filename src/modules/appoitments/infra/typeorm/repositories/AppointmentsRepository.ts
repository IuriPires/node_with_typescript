import IAppointmentsRepository, { IAppointmentsRepository } from '@modules/appoitments/repositories/IAppointmentsRepository';

import Appointment from '../infra/typeorm/entities/Appointment';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> implements IAppointmentsRepository{
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date }
    })

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
