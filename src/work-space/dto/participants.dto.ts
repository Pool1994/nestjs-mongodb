import { IsNumber, IsString } from "class-validator";
import { IParticipants } from "../interfaces";
import { Type } from "class-transformer";

export class ParticipantsDto implements IParticipants{

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @Type(() => Date)
    created_at: Date;
}