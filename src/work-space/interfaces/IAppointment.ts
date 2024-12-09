import { IWorkSpace } from "./IBaseWorkspace";
import { ILead } from "./resources-interface";

export interface IAppointment extends IWorkSpace {
    event_id: string;
    lead: ILead;
}
export type IAppointmentDto = Omit<IAppointment,"event_id" | "deleted_at" | "files" | "tracking">;