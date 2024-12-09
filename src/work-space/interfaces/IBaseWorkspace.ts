import { IFiles } from "./resources-interface/IFiles";
import { ILead } from "./resources-interface/ILead";
import { ITracking } from "./resources-interface/ITracking";


export type TWorkSpaceType = "GENERAL" | "CLIENT" | "LEAD";

export interface IBaseWorkspace {
    type: TWorkSpaceType;
    title: string;
    description: string;
    start_time: Date;
    end_time: Date;
    files: Array<IFiles>;
    tracking: Array<ITracking>;
    is_completed: boolean;
    deleted_at?: Date; // opcional
}