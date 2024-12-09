import { Type } from "class-transformer";
import { IWorkSpaceDto, TWorkSpaceType } from "../interfaces";
import { IsBoolean, IsEnum, IsString } from "class-validator";

export class WorkspaceDto implements IWorkSpaceDto{

    @IsEnum(TWorkSpaceType)
    type: TWorkSpaceType;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @Type(() => Date)
    start_time: Date;

    @Type(() => Date)
    end_time: Date;

    @IsBoolean()
    is_completed: boolean;
}