import { IWorkSpace } from "./IBaseWorkspace";
import { IParticipants } from "./resources-interface";

export enum TMettingMode  {
    InPerson = "IN PERSON",
    Virtual = "VIRTUAL",
    Hybrid = "HYBRID",
}
export interface IMeeting extends IWorkSpace {
    meeting_id: string;
    meeting_mode: TMettingMode;
    participants: Array<IParticipants>;
}
export type IMeetingDto = Omit<IMeeting, "deleted_at" | "files" | "tracking">;