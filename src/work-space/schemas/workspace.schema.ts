import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IBaseWorkspace, IFiles, ILead, IParticipants, ITracking, TWorkSpaceType } from "../interfaces";
import { HydratedDocument } from "mongoose";


@Schema({ discriminatorKey: 'workspaceKind', timestamps: true })
export class WorkSpace implements IBaseWorkspace {
    @Prop({
        required: true
    })
    type: TWorkSpaceType;

    @Prop({ required: true, type: Object })
    lead: ILead;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    start_time: Date;

    @Prop({ required: true })
    end_time: Date;

    @Prop({ default: [] })
    files: Array<IFiles>;

    @Prop({ default: [] })
    participants: Array<IParticipants>;

    @Prop({ required: true })
    tracking: Array<ITracking>;

    @Prop({ required: true })
    is_completed: boolean;

    @Prop({ required: false, default: null })
    deleted_at?: Date; // opcional

    // @Prop({ required: true,immutable: true })
    // workspaceKind: string;
}
export type BaseWorkspaceDocument = HydratedDocument<WorkSpace>;
export const WorkSpaceSchema = SchemaFactory.createForClass(WorkSpace);
export const WORKSPACE_NAME = WorkSpace.name;