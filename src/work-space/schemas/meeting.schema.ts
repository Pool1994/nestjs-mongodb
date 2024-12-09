import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IMeeting, IParticipants, TMettingMode } from "../interfaces";
import { HydratedDocument } from "mongoose";
import { WorkSpace } from "./workspace.schema";


@Schema()
export class Meeting extends WorkSpace implements IMeeting {

    @Prop({ required: true })
    meeting_id: string;

    @Prop({ required: true,enum:TMettingMode })
    meeting_mode: TMettingMode;

    @Prop({ required: true })
    participants: IParticipants[];
}

export type MeetingDocument = HydratedDocument<Meeting>;
export const MeetingSchema = SchemaFactory.createForClass(Meeting);
export const MEETING_NAME = Meeting.name;