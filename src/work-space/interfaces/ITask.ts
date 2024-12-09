import { IWorkSpace } from "./IBaseWorkspace";
import { ILead } from "./resources-interface";

export interface ITask extends IWorkSpace {
    lead: ILead;
}
export type ITaskDto = Omit<ITask, "deleted_at" | "files" | "tracking">;