import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ILead, ITask } from "../interfaces";
import { HydratedDocument } from "mongoose";
import { WorkSpace } from "./workspace.schema";


@Schema()
export class Task extends WorkSpace implements ITask {
    @Prop({ required: true, type: Object })
    lead: ILead;
}
export type TaskDocument = HydratedDocument<Task>;
export const TaskSchema = SchemaFactory.createForClass(Task);
export const TASK_NAME = Task.name;