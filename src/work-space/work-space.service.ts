import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { get, Model } from 'mongoose';
import { APPOINTMENT_NAME, AppointmentDocument, MEETING_NAME, MeetingDocument, Task, TASK_NAME, TaskDocument } from './schemas';
import { IAppointment, IBaseWorkspace, ITask, IWorkSpace, TMettingMode, TWorkSpaceType } from './interfaces';
import { Event, EventDocument } from 'src/events/schema/events.schema';

@Injectable()
export class WorkSpaceService {
    constructor(
        @InjectModel(APPOINTMENT_NAME) private readonly appointModel: Model<AppointmentDocument>,
        @InjectModel(TASK_NAME) private readonly taskModel: Model<TaskDocument>,
        @InjectModel(MEETING_NAME) private readonly meetingModel: Model<MeetingDocument>,
        @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>,

    ) {

    }
    private setDataWorkSpace(data: IBaseWorkspace) {

    }
    async listAppointments(params: { start_date: string, end_date: string, type: "LEAD" | "CLIENT" | "GENERAL" }) {

        const start_date = new Date(`${params.start_date}T00:00:00.000Z`);
        const end_date = new Date(`${params.end_date}T00:00:00.000Z`);
        const appointments = await this.appointModel.find({
            start_time: { $gte: start_date, $lt: end_date },
            end_time: { $gte: start_date, $lt: end_date },
            type: params.type
        }).exec();
        return {
            total: appointments.length,
            data: appointments
        };
    }
    async listTasks() {
        const tasks = await this.taskModel.find().exec();
        return tasks;
    }
    async listMeetings() {
        const meetings = await this.meetingModel.find().exec();
        return meetings;
    }
    async createAppointment() {
        const dataRegister = this.getDataForDay();
        const _type: Array<TWorkSpaceType> = [TWorkSpaceType.Client, TWorkSpaceType.Lead, TWorkSpaceType.General];
        const events = (await this.eventModel.find()).flatMap(event => event._id);
        const event_id = events[Math.floor(Math.random() * events.length)] as string;
        const type = _type[Math.floor(Math.random() * _type.length)];
        const ddd: IWorkSpace = {
            title: `Appointment ${Math.floor(Math.random() * 100)}`,
            description: `Appointment Description for appointment ${Math.floor(Math.random() * 100)}`,
            start_time: new Date(),
            end_time: new Date(),
            files: [],
            is_completed: false,
            tracking: [],
            type,
        }
        const appointment: IAppointment = {
            ...ddd,
            event_id,
            lead: {
                name: 'Pedro',
                id: 1,
                mobile: '+55 00 0000 0000',
            }
        };
        await this.appointModel.create({

        });
        // dataRegister.forEach(async (element, index) => {
        //     const event_id = events[Math.floor(Math.random() * events.length)];
        //     const type = _type[Math.floor(Math.random() * _type.length)];
        //     await this.appointModel.create({
        //         event_id,
        //         type,
        //         title: `Appointment ${index}`,
        //         description: `Appointment Description for appointment ${index}`,
        //         start_time: element.date,
        //         end_time: element.date,
        //         files: [
        //             {
        //                 name: 'file1.pdf',
        //                 mimetype: 'application/pdf',
        //                 url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com&psig=AOvVaw2-9m-1-w-t-4-3-0-g-6-AA&ust=1636560898002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDr-7z9z4CFQAAAAAdAAAAABAD'
        //             },
        //             {
        //                 name: 'file2.pdf',
        //                 mimetype: 'application/pdf',
        //                 url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com&psig=AOvVaw2-9m-1-w-t-4-3-0-g-6-AA&ust=1636560898002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDr-7z9z4CFQAAAAAdAAAAABAD'
        //             }
        //         ],
        //         lead: {
        //             name: 'Pedro',
        //             email: 'pedro@gmail.com',
        //             phone: '+55 00 0000 0000'
        //         },
        //         tracking: [
        //             {
        //                 name: 'Pedro',
        //                 email: 'pedro@gmail.com',
        //                 phone: '+55 00 0000 0000'
        //             },
        //             {
        //                 name: 'Carlos',
        //                 email: 'carlos@gmail.com',
        //                 phone: '+55 00 0000 0000'
        //             }
        //         ],
        //         is_completed: false,
        //         deleted_at: null
        //     })
        // })
    }
    async createMeeting() {
        const dataRegister = this.getDataForDay();
        const mettingModel: Array<TMettingMode> = [TMettingMode.InPerson, TMettingMode.Virtual, TMettingMode.Hybrid];
        const _type: Array<TWorkSpaceType> = [TWorkSpaceType.Client, TWorkSpaceType.Lead, TWorkSpaceType.General];
        dataRegister.forEach(async (element, index) => {
            const meeting_mode = mettingModel[Math.floor(Math.random() * mettingModel.length)];
            const type = _type[Math.floor(Math.random() * _type.length)];
            const  xx = new  this.meetingModel({
                meeting_id: `M00-${index + 1}`,
                meeting_mode,
                type,
                title: `Meeting ${index}`,
                description: `Meeting Description for metting ${index}`,
                start_time: element.date,
                end_time: element.date,
                participants:[
                    {
                        id: 1,
                        name: 19958,
                        created_at: new Date()
                    },
                    
                ],
                files: [
                    {
                        name: 'file1.pdf',
                        mimetype: 'application/pdf',
                        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com&psig=AOvVaw2-9m-1-w-t-4-3-0-g-6-AA&ust=1636560898002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDr-7z9z4CFQAAAAAdAAAAABAD'
                    },
                    {
                        name: 'file2.pdf',
                        mimetype: 'application/pdf',
                        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com&psig=AOvVaw2-9m-1-w-t-4-3-0-g-6-AA&ust=1636560898002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDr-7z9z4CFQAAAAAdAAAAABAD'
                    }
                ],
                lead: {
                    name: 'Pedro',
                    email: 'pedro@gmail.com',
                    phone: '+55 00 0000 0000'
                },
                tracking: [
                    {
                        name: 'Pedro',
                        email: 'pedro@gmail.com',
                        phone: '+55 00 0000 0000'
                    },
                    {
                        name: 'Carlos',
                        email: 'carlos@gmail.com',
                        phone: '+55 00 0000 0000'
                    }
                ],
                is_completed: false,
                deleted_at: null
            })
            xx.save();
        })
    }
    async createTask() {
        const dataRegister = this.getDataForDay();
        const _type: Array<TWorkSpaceType> = [TWorkSpaceType.Client, TWorkSpaceType.Lead, TWorkSpaceType.General];
        dataRegister.forEach(async (element, index) => {
            const type = _type[Math.floor(Math.random() * _type.length)];
            await this.taskModel.create({
                type,
                title: `Task ${index}`,
                description: `Task Description for task ${index}`,
                start_time: element.date,
                end_time: element.date,
                files: [
                    {
                        name: 'file1.pdf',
                        mimetype: 'application/pdf',
                        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com&psig=AOvVaw2-9m-1-w-t-4-3-0-g-6-AA&ust=1636560898002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDr-7z9z4CFQAAAAAdAAAAABAD'
                    },
                    {
                        name: 'file2.pdf',
                        mimetype: 'application/pdf',
                        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com&psig=AOvVaw2-9m-1-w-t-4-3-0-g-6-AA&ust=1636560898002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDr-7z9z4CFQAAAAAdAAAAABAD'
                    }
                ],
                lead: {
                    name: 'Pedro',
                    email: 'pedro@gmail.com',
                    phone: '+55 00 0000 0000'
                },
                tracking: [
                    {
                        name: 'Pedro',
                        email: 'pedro@gmail.com',
                        phone: '+55 00 0000 0000'
                    },
                    {
                        name: 'Carlos',
                        email: 'carlos@gmail.com',
                        phone: '+55 00 0000 0000'
                    }
                ],
                is_completed: false,
                deleted_at: null
            })
        })
    }
    getDaysInYear(year: number): Date[] {
        const days: Date[] = [];
        const date = new Date(Date.UTC(year, 0, 1)); // Usar UTC
        while (date.getUTCFullYear() === year) {
            if (date.getUTCDay() >= 1 && date.getUTCDay() <= 5) {
                days.push(new Date(date));
            }
            date.setUTCDate(date.getUTCDate() + 1); // Usar UTC
        }
        return days;
    }

    generateElementForDays(days: Date[], elementsPerDay: number): Array<{ dateString: string; date: Date; element: string }> {
        const elements = [];
        days.forEach(day => {
            for (let i = 0; i < elementsPerDay; i++) {
                const hour = this.getRandomHour();
                const dateWithTime = new Date(Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), hour.hour, hour.minute));
                elements.push({
                    dateString: dateWithTime.toISOString(),
                    date: dateWithTime,
                    element: `Elemento for ${dateWithTime.toUTCString()}`
                });
            }
        });
        return elements;
    }

    getRandomHour(): { hour: number, minute: number } {
        // Generar una hora y minuto aleatorio dentro de los rangos especificados
        const morningStart = 9; // 9 am
        const morningEnd = 13; // 1 pm
        const afternoonStart = 14; // 2 pm
        const afternoonEnd = 19; // 7 pm

        const isMorning = Math.random() < 0.5;
        const hour = isMorning ?
            Math.floor(Math.random() * (morningEnd - morningStart)) + morningStart :
            Math.floor(Math.random() * (afternoonEnd - afternoonStart)) + afternoonStart;
        const minute = Math.floor(Math.random() * 60);

        return { hour, minute };
    }

    getDataForDay(): Array<{ dateString: string; date: Date; element: string }> {
        const days = this.getDaysInYear(2024);
        const elementsPerDay = 60;
        return this.generateElementForDays(days, elementsPerDay);
    }
}
