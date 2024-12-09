import { Schema, SchemaFactory } from "@nestjs/mongoose";
import {  ITask } from "../interfaces";
import { HydratedDocument, model } from "mongoose";
import { WorkSpace } from "./workspace.schema";


@Schema()
export class Task extends WorkSpace  implements ITask { }
export type TaskDocument = HydratedDocument<Task>;
export const TaskSchema = SchemaFactory.createForClass(Task);
export const TASK_NAME = Task.name;