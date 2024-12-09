import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IMeeting, IParticipants, TMettingMode } from "../interfaces";
import { HydratedDocument } from "mongoose";
import { WorkSpace } from "./workspace.schema";


@Schema()
class ParticipantsSchema implements IParticipants {

    @Prop({ required: true, type: Number })
    id: number;

    @Prop({ required: true, type: String })
    name: string;

    @Prop({ required: true, type: Date })
    created_at: Date;

    @Prop({ required: false, default: null })
    deleted_at?: Date;
}
@Schema()
export class Meeting extends WorkSpace implements IMeeting {

    @Prop({ required: true })
    meeting_id: string;

    @Prop({ required: true, enum: TMettingMode })
    meeting_mode: TMettingMode;

    @Prop({  required: true,type: Array<ParticipantsSchema> })
    participants: Array<IParticipants>;
}

export type MeetingDocument = HydratedDocument<Meeting>;

export const MeetingSchema = SchemaFactory.createForClass(Meeting);

export const MEETING_NAME = Meeting.name;