import { WorkspaceDto } from "./workspace.dto";
import { Type } from "class-transformer";
import { LeadWorkspaceDto } from "./lead-worspace.dto";
import { IAppointmentDto, ILead } from "../interfaces";

export class AppointmentDto extends WorkspaceDto implements IAppointmentDto{

    @Type(() => LeadWorkspaceDto)
    lead: ILead;
}