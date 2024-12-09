import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IFiles, ILead, IMeeting, IParticipants, ITracking, TMettingMode, TWorkSpaceType } from "../interfaces";
import { HydratedDocument, model } from "mongoose";
import { WorkSpace } from "./workspace.schema";


@Schema()
export class Meeting extends WorkSpace implements IMeeting {

    @Prop({ required: true })
    meeting_id: string;

    @Prop({ required: true })
    meeting_mode: TMettingMode;
}

export type MeetingDocument = HydratedDocument<Meeting>;
export const MeetingSchema = SchemaFactory.createForClass(Meeting);
export const MEETING_NAME = Meeting.name;