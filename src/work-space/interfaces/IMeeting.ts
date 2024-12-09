import { IBaseWorkspace } from "./IBaseWorkspace";
import { IParticipants } from "./resources-interface";

export type TMettingMode = "IN PERSON" | "VIRTUAL" | "HYBRID";
export interface IMeeting extends IBaseWorkspace {
    meeting_id: string;
    meeting_mode: TMettingMode;
    participants: Array<IParticipants>;
}
