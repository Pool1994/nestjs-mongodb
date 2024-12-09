import { IFiles } from "./resources-interface/IFiles";

import { ITracking } from "./resources-interface/ITracking";


export enum TWorkSpaceType {
    General = "GENERAL",
    Client = "CLIENT",
    Lead = "LEAD",
};

export interface IBaseWorkspace {
    _id: string;
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
export type IWorkSpace = Omit<IBaseWorkspace, "_id">;
export type IWorkSpaceDto = Omit<IWorkSpace, "deleted_at" | "files" | "tracking">;