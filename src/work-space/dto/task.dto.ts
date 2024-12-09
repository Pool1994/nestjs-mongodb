import { Type } from "class-transformer";
import { ILead, ITask, ITaskDto } from "../interfaces";
import { WorkspaceDto } from "./workspace.dto";
import { LeadWorkspaceDto } from "./lead-worspace.dto";

export class TaskDto extends WorkspaceDto implements ITaskDto{
    @Type(() => LeadWorkspaceDto)
    lead: ILead;
}