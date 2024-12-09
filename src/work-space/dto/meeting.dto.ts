import { IsEnum, IsString } from "class-validator";
import { IMeetingDto, IParticipants, TMettingMode } from "../interfaces";
import { WorkspaceDto } from "./workspace.dto";
import { Type } from "class-transformer";
import { ParticipantsDto } from "./participants.dto";

export class MeetingDto extends WorkspaceDto implements IMeetingDto{

    @IsString()
    meeting_id: string;

    @IsEnum(TMettingMode)
    meeting_mode: TMettingMode;

    @Type(() => ParticipantsDto)
    participants: Array<IParticipants>;
}