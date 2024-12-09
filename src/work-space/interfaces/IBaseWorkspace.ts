import { IFiles } from "./resources-interface/IFiles";
import { ILead } from "./resources-interface/ILead";
import { IParticipants } from "./resources-interface/IParticipants";
import { ITracking } from "./resources-interface/ITracking";


export type TWorkSpaceType = "GENERAL" | "CLIENT" | "LEAD";

export interface IBaseWorkspace {
    type: TWorkSpaceType;
    lead: ILead;
    title: string;
    description: string;
    start_time: Date;
    end_time: Date;
    files: Array<IFiles>;
    participants: Array<IParticipants>;
    tracking: Array<ITracking>;
    is_completed: boolean;
    deleted_at?: Date; // opcional
}