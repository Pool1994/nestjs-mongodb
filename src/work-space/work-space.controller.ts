import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkSpaceService } from './work-space.service';

@Controller('work-space')
export class WorkSpaceController {
    constructor(private readonly workSpaceService: WorkSpaceService) { }

    @Post('appointment')
    async createAppointment() {
        return this.workSpaceService.createAppointment();
    }
    @Post('task')
    async createTask() {
        return this.workSpaceService.createTask();
    }

    @Post('metting')
    async createMeeting() {
        return this.workSpaceService.createMeeting();
    }
    @Post('appointment/list')
    async listAppointments(@Body() params: { start_date: string, end_date: string,type:"LEAD"|"CLIENT"|"GENERAL" }) {
        // return params;
        return this.workSpaceService.listAppointments(params);
    }
}
