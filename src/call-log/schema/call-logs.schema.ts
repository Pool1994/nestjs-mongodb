import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as moment from 'moment-timezone';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type CallLogDocument = CallLog & Document;
interface ClientAccount {
    client_account_id: string;
    account: string;
    program_id: number;
    program_name: string;
    status_id: number;
    status_name: string;
    status_color: string;
    enroll_date: string;
    parent_name?: string;
    parent_color?: string;
  }

@Schema()
export class CallLog {
    @Prop({ unique: true })
    session_id: string;

    @Prop()
    event_time: Date;

    @Prop()
    direction: string;

    @Prop()
    to: string;

    @Prop()
    from: string;

    @Prop()
    duration: number;

    @Prop()
    response_time: number;

    @Prop()
    uri: string;

    @Prop()
    status: string;

    @Prop()
    description: string;

    @Prop()
    missed_call: boolean;

    @Prop()
    result: string;

    @Prop()
    transcription: string;

    @Prop()
    summary: string;

    @Prop({ default: () => moment.tz('America/Los_Angeles') })
    created_at: Date;

    @Prop({
        type: [{
            _id: { type: Types.ObjectId, auto: true },
            id: { type: Number },
            name: { type: String },
            number: { type: String },
            is_client: { type: Boolean },
            client_accounts: [{
                client_account_id: { type: String },
                account: { type: String },
                program_id: { type: Number },
                program_name: { type: String },
                status_id: { type: Number },
                status_name: { type: String },
                status_color: { type: String },
                enroll_date: { type: String },
                parent_name: { type: String },
                parent_color: { type: String },
              }]
        }],
        required: false,
    })
    leads?: {
        _id: Types.ObjectId;
        id: number;
        name: string;
        number: string;
        is_client: boolean;
        client_accounts: ClientAccount[];
    }[];

    @Prop({
        type: {
            _id: { type: Types.ObjectId, auto: true },
            id: { type: Number },
            name: { type: String },
            number: { type: String },
            is_client: { type: Boolean },
        },
        required: false,
    })
    seller?: {
        _id: Types.ObjectId;
        id: number;
        name: string;
        number: string;
    };

    @Prop()
    migrated: boolean;
}

const CallLogSchema = SchemaFactory.createForClass(CallLog);

// Crea el índice para 'session_id' y 'id'
CallLogSchema.index({ session_id: 1 }, { unique: true });
CallLogSchema.index({ id: 1 });

// Asegura la creación automática de índices
CallLogSchema.set('autoIndex', true);

export { CallLogSchema };
