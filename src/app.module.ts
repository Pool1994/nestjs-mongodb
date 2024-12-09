import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { WorkSpaceModule } from './work-space/work-space.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './events/events.module';
import { CallLogModule } from './call-log/call-log.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-mongodb'),
    WorkSpaceModule,
    EventsModule,
    CallLogModule
  ],
  controllers: [],
  providers: [AppService],
})

export class AppModule {}
