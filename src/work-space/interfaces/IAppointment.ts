import { ILead } from "./resources-interface";

export  interface IAppointment {
    event_id: string;
    lead?: ILead;
}
