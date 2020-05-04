import Appointment from '../models/Appointment';
import appointmentsRepository from '../repositories/AppointmentsRepository'
import { startOfHour } from 'date-fns'
import AppointmentsRepository from '../repositories/AppointmentsRepository';


interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  constructor() {

  }

  public execute({ provider, date }: Request): Appointment {
    const appointmentsRepository = new AppointmentsRepository();

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = appointmentsRepository.findByDate(date);

    if(findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider, date: appointmentDate
    });

    return appointment;
  }
}

export default CreateAppointmentService;
