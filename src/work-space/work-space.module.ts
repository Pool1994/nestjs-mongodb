import { Module } from '@nestjs/common';
import { WorkSpaceController } from './work-space.controller';
import { WorkSpaceService } from './work-space.service';
import { MongooseModule } from '@nestjs/mongoose';
import { APPOINTMENT_NAME, AppointmentSchema, MEETING_NAME, MeetingSchema, TASK_NAME, TaskSchema } from './schemas';
import { WorkSpaceSchema, WORKSPACE_NAME } from './schemas/workspace.schema';
import { Event, EventSchema } from 'src/events/schema/events.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: WORKSPACE_NAME,
          schema: WorkSpaceSchema,
          discriminators: [
            { name: APPOINTMENT_NAME, schema: AppointmentSchema },
            { name: MEETING_NAME, schema: MeetingSchema },
            { name: TASK_NAME, schema: TaskSchema }
          ]
        },
        {
          name:Event.name,
          schema: EventSchema
        }
      ]
    )
  ],
  controllers: [WorkSpaceController],
  providers: [WorkSpaceService]
})
export class WorkSpaceModule { }
