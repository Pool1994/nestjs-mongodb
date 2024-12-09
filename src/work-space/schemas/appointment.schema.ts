import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IAppointment, IFiles, ILead, IParticipants, ITracking, TWorkSpaceType } from "../interfaces";
import { HydratedDocument, model } from "mongoose";
import { WorkSpace } from "./workspace.schema";

@Schema()
export class Appointment extends WorkSpace implements IAppointment {
    @Prop({ required: true })
    event_id: string;
}

export type AppointmentDocument = HydratedDocument<Appointment>;
export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
export const APPOINTMENT_NAME = Appointment.name;