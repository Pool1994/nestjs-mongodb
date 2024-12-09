import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as moment from 'moment-timezone';
import { CallLog } from 'src/call-log/schema/call-logs.schema';


export type EventDocument = Event & Document;

export enum EventType {
    Assignment = 'assignment',
    Appointment = 'appointment',
    Recovery = 'recovery',
}

export enum EventStatus {
    Pending = 'pending',
    Accepted = 'accepted',
    Declined = 'declined',
    NoAction = 'no-action',
    Reassigned = 'reassigned',
    InCall = 'no-contact-in-call',
    NoContact = 'no-contact',
    Contacted = 'contacted',
    Unscheduled = 'unscheduled',
    Scheduled = 'scheduled',
    LateCall = 'late-call',
}

export enum Available {
    Pending = 'pending',
    Available = 'available',
    Unavailable = 'unavailable',
}

export enum SalesMade {
    Pending = 'pending',
    Completed = 'completed',
    Removed = 'removed'
}


class MissedCall {
    @Prop({ required: false, default: false })
    is_done?: boolean;

    @Prop({ type: Object, required: false })
    action_taken_by: {
        id: number;
        name: string;
        date: Date;
    };
}


@Schema()
export class Event {
    @Prop({ required: true })
    event_type: EventType;

    @Prop({
        type: {
            id: { type: Number, required: true },
            name: { type: String },
            number: { type: String },
            time_zone: { type: String },
            state: { type: String }
        },
        required: true,
    })
    lead: {
        id: number;
        name: string;
        number: string;
        time_zone: string;
        state: string;
    };

    @Prop({ required: false })
    program_id: number;

    @Prop({ required: true })
    program_name: string;

    @Prop({ type: { id: { type: Number, required: true }, name: { type: String } } })
    seller: {
        id: number;
        name: string;
    }

    @Prop({ type: { id: { type: Number, required: true }, name: { type: String } } })
    assigned: {
        id: number;
        name: string;
    }

    @Prop()
    event_at: Date;

    @Prop()
    event_time: string;

    @Prop()
    event_time_lead: string;

    @Prop()
    event_date: string;

    @Prop({ default: 'pending' })
    status: EventStatus;

    @Prop()
    calls: Array<CallLog>;

    @Prop()
    parent_id: Types.ObjectId;

    @Prop()
    sql_event_id: number;

    @Prop()
    reply_id: number;

    @Prop({ default: false })
    created_by_seller: boolean;

    @Prop({ default: false })
    is_new_contact: boolean;

    @Prop()
    deleted_at: Date;

    @Prop({ default: () => moment.tz('America/Los_Angeles') })
    created_at: Date;

    @Prop()
    updated_at: Date;

    @Prop({ default: 'pending' })
    available: Available;

    @Prop({ default: false })
    self_reschedule: boolean;

    @Prop({ default: false })
    processed: boolean;

    @Prop()
    sales_made: SalesMade;

    @Prop({ type: [] })
    suggestedPrograms: [];


    @Prop({
        type: {
            action: { type: String, required: false },
            created_at: { type: Date, default: () => moment.tz('America/Los_Angeles').toDate() },
        },
        required: false
    })
    action_taken?: { action?: string; created_at?: Date; status?: string } | null;
    @Prop()
    date_infraction: string;

    @Prop({ type: Object })
    attachment?: {
        id: string;
        name: string;
        url: string;
        extension: string;
        size: number;
        route: string;
    }
    @Prop({ default: 0 })
    notifications?: number; //Notificaciones enviadas a metamedia por llamadas no contestadas

    @Prop({ default: null }) 
    is_answered: boolean;

    @Prop({type: String, default: null})
    comment: string;

    @Prop({type: MissedCall, default: {}})
    missed_call: MissedCall;

    @Prop({ type: [MissedCall], default: [] })
    missed_calls_history: MissedCall[];
    
}

const EventSchema = SchemaFactory.createForClass(Event);

EventSchema.index({ id: 1 });
EventSchema.index({ 'seller.id': 1 });

export { EventSchema };

