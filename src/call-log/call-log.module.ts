import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CallLog, CallLogSchema } from './schema/call-logs.schema';
import { EventSchema } from 'src/events/schema/events.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: CallLog.name, schema: CallLogSchema }, { name: Event.name, schema: EventSchema }]),
    ]
})
export class CallLogModule {}
