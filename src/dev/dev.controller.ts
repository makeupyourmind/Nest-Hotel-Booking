import { Controller, Delete } from '@nestjs/common';
import { DevService } from './dev.service';

@Controller('dev')
export class DevController {
    constructor(private readonly devService: DevService) {}

    @Delete('/deleteall')
    async delete(): Promise <any> {
        return await this.devService.delete();
    }
}
