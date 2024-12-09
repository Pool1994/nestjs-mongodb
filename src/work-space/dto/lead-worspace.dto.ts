import { IsNumber, IsString } from "class-validator";
import { ILead } from "../interfaces";

export class LeadWorkspaceDto implements ILead{

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    mobile: string;

    @IsString()
    account?: string;

    @IsString()
    client_account_id?: string;

    @IsString()
    program_id?: number;

    @IsString()
    program_name?: string;
}