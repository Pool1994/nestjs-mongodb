import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IFiles, ITracking, IWorkSpace, TWorkSpaceType } from "../interfaces";
import { HydratedDocument } from "mongoose";


@Schema({ discriminatorKey: 'workspaceKind', timestamps: true })
export class WorkSpace implements IWorkSpace {
    @Prop({
        required: true,
        enum: TWorkSpaceType,
    })
    type: TWorkSpaceType;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    start_time: Date;

    @Prop({ required: true })
    end_time: Date;

    @Prop({ required: false, default: [], type: Array<IFiles> })
    files: Array<IFiles>;

    @Prop({ required: true, type: Array<ITracking> })
    tracking: Array<ITracking>;

    @Prop({ required: true })
    is_completed: boolean;

    @Prop({ required: false, default: null })
    deleted_at?: Date; // opcional

}
export type BaseWorkspaceDocument = HydratedDocument<WorkSpace>;

export const WorkSpaceSchema = SchemaFactory.createForClass(WorkSpace);

export const WORKSPACE_NAME = WorkSpace.name;