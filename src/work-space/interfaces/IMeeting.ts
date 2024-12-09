
export type TMettingMode = "IN PERSON" | "VIRTUAL" | "HYBRID";
export interface IMeeting{
    meeting_id: string;
    meeting_mode: TMettingMode;
}
