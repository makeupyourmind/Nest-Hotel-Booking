import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DevService } from './dev.service';
import { DevController } from './dev.controller';
import { TicketSchema } from '../ticket/schemas/ticket.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }])],
  controllers: [DevController],
  providers: [DevService]
})
export class DevModule {}
