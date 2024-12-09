import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IAppointment, ILead } from "../interfaces";
import { HydratedDocument } from "mongoose";
import { WorkSpace } from "./workspace.schema";

@Schema()
export class Appointment extends WorkSpace implements IAppointment {
    @Prop({ required: true })
    event_id: string;

    @Prop({ required: true, type: Object })
    lead: ILead;
}

export type AppointmentDocument = HydratedDocument<Appointment>;
export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
export const APPOINTMENT_NAME = Appointment.name;